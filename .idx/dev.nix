{pkgs}: {
  channel = "stable-23.11";
  packages = [
    pkgs.nodejs_20
    pkgs.corepack_20
  ];
  idx.extensions = [
    "astro-build.astro-vscode"
  ];
  idx.previews = {
  };
}