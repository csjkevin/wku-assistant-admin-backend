/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');

const migrationDir = path.join(__dirname, 'migrations');
const dir = fs.readdirSync(migrationDir);
const files = dir.filter((filename) => /\.(js)$/.test(filename.toLowerCase()));

for (const file of files) {
  const tempDir = path.join(migrationDir, 'temp');
  if (fs.existsSync(tempDir)) {
    fs.rmdirSync(tempDir, { recursive: true, force: true });
  }
  fs.mkdirSync(tempDir);
  fs.writeFileSync(
    path.join(tempDir, `${Date.parse(new Date())}_${file}`),
    fs.readFileSync(path.join(migrationDir, file)),
  );
}
