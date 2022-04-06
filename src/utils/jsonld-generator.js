// This does not support nested pages (level 2 and up)
// If you're working with deeply nested pages, remove this or rework it.

const generator = ({
    pathname,
    canonical,
    siteUrl,
    siteTitle,
    pageTitleFull,
}) => {
    const isSubPage = pathname !== '/'

    const schema = [
        {
            '@context': 'http://schema.org',
            '@type': 'WebSite',
            url: canonical,
            name: siteTitle,
            alternateName: pageTitleFull,
        },
    ]

    if (isSubPage) {
        schema.push({
            '@context': 'http://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
                {
                    '@type': 'ListItem',
                    position: 1,
                    item: {
                        '@id': siteUrl,
                        name: siteTitle,
                    },
                },
                {
                    '@type': 'ListItem',
                    position: 2,
                    item: {
                        '@id': canonical,
                        name: pageTitleFull,
                    },
                },
            ],
        })
    }

    return schema
}

export default generator
