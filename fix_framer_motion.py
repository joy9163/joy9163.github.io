#!/usr/bin/env python3
import re
import os

files_to_fix = [
    'app/about/page.tsx',
    'app/activities/page.tsx',
    'app/contact/page.tsx',
    'app/cv/page.tsx',
    'app/publications/page.tsx',
    'app/research/page.tsx'
]

framer_motion_props = [
    r'\s*initial=\{\{[^}]+\}\}',
    r'\s*animate=\{\{[^}]+\}\}',
    r'\s*whileInView=\{\{[^}]+\}\}',
    r'\s*whileHover=\{\{[^}]+\}\}',
    r'\s*whileTap=\{\{[^}]+\}\}',
    r'\s*transition=\{\{[^}]+\}\}',
    r'\s*viewport=\{\{[^}]+\}\}',
]

for file_path in files_to_fix:
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        continue
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace motion.div with div
    content = re.sub(r'<motion\.div', '<div', content)
    content = re.sub(r'</motion\.div>', '</div>', content)
    
    # Replace motion.section with section
    content = re.sub(r'<motion\.section', '<section', content)
    content = re.sub(r'</motion\.section>', '</section>', content)
    
    # Replace motion.button with button
    content = re.sub(r'<motion\.button', '<button', content)
    content = re.sub(r'</motion\.button>', '</button>', content)
    
    # Remove framer-motion props from all elements
    for prop_pattern in framer_motion_props:
        content = re.sub(prop_pattern, '', content)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Fixed: {file_path}")

print("\nAll files have been fixed!")
