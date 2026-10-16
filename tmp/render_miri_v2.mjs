// FIRIS 발표자료 - SVG 슬라이드 PNG 렌더링
import sharp from 'file:///C:/Users/admin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp/dist/index.cjs';

const base = 'D:/Firis/FIRIS/output/miri-slides';
for (const name of ['slide-21-v2', 'slide-23-v2']) {
  await sharp(`${base}/${name}.svg`, { density: 96 })
    .resize(1920, 1080)
    .png()
    .toFile(`${base}/${name}.png`);
}
