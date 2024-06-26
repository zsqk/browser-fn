// deno run -A tools/cli.ts
import { parse } from 'https://deno.land/std@0.161.0/flags/mod.ts';
import { genGitPush } from "../deno/git.ts";

const args = parse<
  Partial<
    {
      "repo-name": string;
      "repo-uri": string;
      "branch": string;
      "ssh": string;
    }
  >
>(
  Deno.args,
);

const repoName = args['repo-name'];
const repoURI = args['repo-uri'];
const branch = args['branch'];
const sshPrivateKey = args.ssh?.replaceAll("\\n", '\n');

if (!repoName || !repoURI || !sshPrivateKey) {
  console.error('args invalid')
  Deno.exit(1);
}

await genGitPush({
  repoName,
  repoURI,
  branch,
  sshPrivateKey,
});
