console.log('Happy developing ✨')

import imagemin from 'imagemin';
import imageminPngquant from 'imagemin-pngquant';

(async () => {
    await imagemin(['images/*.png'], {
        destination: 'output/images',
        plugins: [
            imageminPngquant({
                quality: [0, 0.05]
            })
        ]
    });
    console.log('PNG optimisé avec succès !');
})();
