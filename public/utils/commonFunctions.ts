export const formatTitle = (slug: string): string => {
    return slug.split('-').map((word) => word[0].toUpperCase() + word.slice(1)).join(' ')
}

