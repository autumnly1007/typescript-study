{
  type PageInfo = {
    title: string;
  };

  type Page = 'home' | 'about' | 'contact';

  // Record<Key, Value>
  // map 과 비슷함. 둘을 연결하고 싶을 경우 사용
  const nav: Record<Page, PageInfo> = {
    home: { title: 'Home' },
    about: { title: 'About' },
    contact: {title: 'Contact'}
  };
}