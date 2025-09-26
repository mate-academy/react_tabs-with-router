import { Tab as TabType } from './Tab';

describe('Tab interface', () => {
  it('should match the expected structure', () => {
    const exampleTab: TabType = {
      id: '1',
      title: 'Exemplo',
      content: 'Conteúdo do exemplo',
    };

    expect(exampleTab.id).toBe('1');
  });
});
