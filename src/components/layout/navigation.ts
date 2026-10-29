export interface NavItem {
  id: string
  label: string
}

/** Section ids on the home page. The order here is the order of the navigation. */
export const sectionNav: NavItem[] = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export const sectionIds = sectionNav.map((item) => item.id)
