import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux';
// import { addTodo } from '../../redux/actions';
import { useState, useRef } from 'react';
import { todosRemainningSelector } from '../../redux/selectors';
import { todoSlice } from './todoSlice';

export default function TodoList() {
    const [todoName, setTodoName] = useState('');
    const [priority, setPriority] = useState('Medium');

    const inputRef = useRef();

    const todoList = useSelector(todosRemainningSelector);
    // const searchText = useSelector(searchTextSelector);
    // console.log(todoList);

    const dispatch = useDispatch();

    const handleAddButtonClick = () => {
        dispatch(
            todoSlice.actions.addTodo({
                id: Math.round(Math.random() * 100),
                name: todoName,
                completed: false,
                priority: priority,
            }),
        );
        setTodoName('');
        handlePriorityChange('Medium');
        inputRef.current.focus();
    };
    const handleInputChange = (e) => {
        setTodoName(e.target.value);
    };
    const handlePriorityChange = (value) => {
        setPriority(value);
    };

    return (
        <Row style={{ height: 'calc(100% - 40px)' }}>
            <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
                {/* <Todo name="Learn React" prioriry="High" />
                <Todo name="Learn Redux" prioriry="Medium" />
                <Todo name="Learn JavaScript" prioriry="Low" /> */}
                {todoList.map((todo) => (
                    <Todo
                        id={todo.id}
                        completed={todo.completed}
                        key={todo.id}
                        name={todo.name}
                        prioriry={todo.priority}
                    />
                ))}
            </Col>
            <Col span={24}>
                <Input.Group style={{ display: 'flex' }} compact>
                    <Input ref={inputRef} value={todoName} onChange={handleInputChange} />
                    <Select defaultValue="Medium" value={priority} onChange={handlePriorityChange}>
                        <Select.Option value="High" label="High">
                            <Tag color="red">High</Tag>
                        </Select.Option>
                        <Select.Option value="Medium" label="Medium">
                            <Tag color="blue">Medium</Tag>
                        </Select.Option>
                        <Select.Option value="Low" label="Low">
                            <Tag color="gray">Low</Tag>
                        </Select.Option>
                    </Select>
                    <Button type="primary" onClick={handleAddButtonClick}>
                        Add
                    </Button>
                </Input.Group>
            </Col>
        </Row>
    );
}
