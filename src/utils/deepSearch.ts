import { Data } from "../Interfaces/data";

export const generateFilePathBySearchResult = (
  data: Data[],
  name: string,
  path: string = ""
) => {
  const foundPaths: string[] = [];

  const searchInItem = (item: Data, currentPath: string) => {
    const newPath =
      currentPath === "" ? item.name : `${currentPath}/${item.name}`;

    if (name && item.name.startsWith(name)) {
      foundPaths.push(newPath);
    } else if (item.children && item.children.length > 0) {
      for (let child of item.children) {
        searchInItem(child, newPath);
      }
    }
  };

  for (let item of data) {
    searchInItem(item, path);
  }

  return foundPaths.length > 0 ? foundPaths : null;
};
