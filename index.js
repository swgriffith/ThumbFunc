var Jimp = require("jimp");

module.exports = (context, myBlob) => {
    
    // Read image with Jimp
    Jimp.read(myBlob).then((image) => {

        // Manipulate image
        image
            .resize(200, Jimp.AUTO) 
            .getBuffer(Jimp.MIME_JPEG, (error, stream) => {

                // Check for errors
                if (error) {
                    context.log(`There was an error processing the image`);
                    context.done(error);
                }
                else {
                    context.log(`Successfully processed the image`);

                    // Bind the stream to the output binding to create a new blob
                    context.done(null, stream);

                }

            });

    });

};