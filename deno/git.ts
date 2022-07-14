/**
 * 拉取 Git 仓库最新内容
 *
 * 需要 git 支持.
 */
export async function pullGitRepo(repo: string, opt: {
  keyPath?: string;
  branch?: string;
  depth?: string;
  dirPath?: string;
} = {}) {
  // 根据需求创建临时目录
  const tempPath = opt.dirPath ?? Deno.makeTempDirSync();
  Deno.chdir(tempPath);

  let branchParam: Array<string> = [];
  if (opt.branch) {
    branchParam = ['-b', opt.branch];
  }
  let keyParam: Array<string> = [];
  if (opt.keyPath) {
    keyParam = ['-c', `core.sshCommand=ssh -i ${opt.keyPath}`];
  }
  const depthParam: Array<string> = ['--depth', opt.depth ?? '1'];
  const command: Array<string> = [
    'git',
    'clone',
    ...keyParam,
    repo,
    ...depthParam,
    ...branchParam,
  ];

  const r = Deno.run({
    cmd: command,
    cwd: tempPath,
  });
  const rs = await r.status();
  r.close();
  if (!rs.success) {
    throw new Error(`git 拉取失败, code ${rs.code}`);
  }

  return tempPath;
}
