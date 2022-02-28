{
  type ToDo = {
    title: string;
    description: string;
    label: string;
    priority: 'high' | 'low';
  }

  function updateTodo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
    return { ...todo, ...fieldsToUpdate };
  }

  const todo: ToDo = {
    title: 'learn TypeScript',
    description: 'study hard',
    label: 'study',
    priority: 'high'
  };

  updateTodo(todo, { priority: 'low' });
  // todo 기존의 데이터를 유지하면서 priority 만 덮어씌워짐

  // Partial utility type
  // 기존 타입 중에서 부분적인 것만 허용하고 싶을 때 사용

}