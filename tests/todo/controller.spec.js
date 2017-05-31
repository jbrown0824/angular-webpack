import TodoController from '../../app/todo/controller';

describe('Todo Component Tests', () => {
    let controller;

    beforeEach(() => {
        controller = new TodoController();
    })

    it('should have a default todo', () => {
        expect(controller.todos.length).toBeGreaterThan(0);
    })

    it('should get the number of incomplete todos', () => {
        expect(controller.getIncompleteTodos()).toEqual(1);
    })
})