// Licensed under the MIT License.

import { CommentThreadStatus } from "azure-devops-node-api/interfaces/GitInterfaces";
import PullRequestCommentData from "./PullRequestCommentData";

/**
 * A class representing a file comment.
 */
export default class FileCommentData extends PullRequestCommentData {
  public fileName: string;

  /**
   * Initializes a new instance of the `FileCommentData` class.
   * @param id The optional comment ID.
   * @param content The optional content (i.e., the text) associated with the comment.
   * @param fileName The optional full file name and path associated with the comment.
   * @param status The optional status associated with the comment.
   */
  public constructor(
    id: number,
    content: string,
    fileName: string,
    status?: CommentThreadStatus
  ) {
    super(id, content, status);

    this.fileName = fileName;
  }
}
