import type { ReactNode } from 'react'

export const PEOPLE: Record<string, string> = {
  'Yuan Wang': 'https://earthsystemscience.stanford.edu/people/yuan-wang',
  'Liyin He': 'https://scholars.duke.edu/person/liyin.he',
  'Jianzhen Yu': 'https://facultyprofiles.hkust.edu.hk/profiles.php?profile=jianzhen-yu-chjianyu',
  'Lixue Cheng': 'https://facultyprofiles.hkust.edu.hk/profiles.php?profile=sherry-lixue-cheng-lixuecheng',
  'Chao Yan': 'https://nh.nju.edu.cn/en/info/1051/6872.htm',
  'Lian Xue': 'https://nh.nju.edu.cn/en/info/1051/7752.htm',
  'Maricar Aguilos': 'https://cnr.ncsu.edu/directory/maricar-aguilos/',
  'Anning Huang': 'https://as.nju.edu.cn/as_en/00/2c/c20738a327724/page.htm',
  'Yang Zhang': 'https://as.nju.edu.cn/as_en/01/1e/c20738a327966/page.htm',
}

const pattern = new RegExp(`(${Object.keys(PEOPLE).join('|')})`, 'g')

export function PersonLink({ name }: { name: string }) {
  return (
    <a href={PEOPLE[name]} target="_blank" rel="noreferrer noopener">
      {name}
    </a>
  )
}

export function withPeopleLinks(text: string): ReactNode {
  return text.split(pattern).map((part, i) =>
    PEOPLE[part] ? <PersonLink key={i} name={part} /> : part
  )
}
