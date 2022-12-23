import { poetryproseContent, poetryproseTitles, poetryproseAuthors } from "./poetryproseData.js";
import { artContent, artTitles, artAuthors } from "./artData.js";
import { chaptersData } from "./chaptersData.js";

class Work {
  constructor(id, title, author, content) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.content = content;
  }
}

// TODO call this from another file

export const getWorksData = () => {
  const poetryproseWorks = [];
  const artWorks = [];

  const layout = [];

  // Insert data with appropriate id
  for (var i = 0; i < poetryproseContent.length; i++) {
    const work = new Work(i, poetryproseTitles[i], poetryproseAuthors[i], poetryproseContent[i]);
    poetryproseWorks.push(work);
  }

  const id = poetryproseWorks.length;

  for (var i = 0; i < artContent.length; i++) {
    const work = new Work(i, artTitles[i], artAuthors[i], artContent[i]);
    artWorks.push(work);
  }
  return [poetryproseWorks, artWorks, layout];
}

export const getChaptersData = () => {
  return chaptersData;
}