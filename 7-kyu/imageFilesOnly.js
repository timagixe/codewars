/*

- TITLE:
Image Files Only

- DESCRIPTION:
Build a function that will take an array of filenames (as string) and return an array of array. Each array will provide 3 informations about the image file: the full filename, its name and the extension. (See the example below)

Detect the image files based on the end of the filename which is their format (extension).
Image files are defined as jpg, gif, png, tiff, svg and bmp. So "puppies.jpg" is a image file while "puppies.html" is not.

For example:
Input: ["imgName.extension", "notAnImg"]
Output: [["imgName.extension", "imgName", "extension"], null]

So:
imageFilter(["index.html", "favicon.gif"])
return [null, ["favicon.gif", "favicon", "gif"]] 

!Non Case Sensitive, so a file with the extension .jpg or .JPG is still an image.

- LABELS:
#STRINGS #ALGORITHMS

*/

const IMG_REGEXP = /^jpg$|^gif$|^png$|^tiff$|^svg$|^bmp$/i;

function imageFilter(files) {
  return files.reduce((acc, filename) => {
    const [name, extension] = extractFileData(filename);
    if (!isValidImage(name, extension)) return acc.concat(null);
    return acc.concat([[filename, name, extension]]);
  }, []);
}

function isValidImage(name, extension) {
  return IMG_REGEXP.test(extension) && !!name.length;
}

function extractFileData(filename) {
  const splitted = filename.split(".");
  const name = splitted[0];
  const extension = splitted[splitted.length - 1];
  return [name, extension];
}
