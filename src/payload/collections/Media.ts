import { slateEditor } from '@payloadcms/richtext-slate'
import path from 'path'
import type { CollectionConfig } from 'payload/types'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticDir: path.resolve(__dirname, '../../../media'),
    imageSizes: [
      {
        name: 'sc_550x550',
        width: 550,
        height: 550,
      },
      {
        name: 'sc_1100x1100',
        width: 1100,
        height: 1100,
      },
      {
        name: 'sc_1020x296',
        width: 1020,
        height: 296,
      },
    ],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      localized: true,
      required: true,
    },
    /*
    {
      name: 'caption',
      type: 'richText',
      editor: slateEditor({
        admin: {
          elements: ['link'],
        },
      }),
    },

     */
  ],
}
