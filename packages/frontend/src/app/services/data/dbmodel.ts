/** articulos
 *
 * id: string
 * title: string
 * category: string
 * tags: string[]
 * creatorID: string
 * writers: string[]
 * modifications: string[]
 * reactions: string[]
 */

/**
 * Editions
 *
 * id: string
 * content: string
 * authorID: string
 * date: date
 * status: [pendiente, revisado, rechazado]
 * fechaRevision: date
 */

/**
 * tags
 *
 * id: string
 * label: string
 *
 */

/** 
 * categories: 
    id: string,
    icon: string,
    text: string,
    tags: string[tagsID],
  },
 */

/**
   * users
    id: string,
    avatar: string,
    userName: string,
    email: string,
    role: string,
    password: string,
    token: string,
    passrecoverToken: string,
    reactions: string[reactionsID],
   */

/**
 * reactions
 *
 * id: string,
 * userId: string,
 * articleId: string,
 * name: string,
 */
