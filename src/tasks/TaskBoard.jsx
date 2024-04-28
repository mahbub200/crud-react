import React, { useState } from "react";
import AddTaskModal from "./AddTaskModal";
import SearchBox from "./SearchBox";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";

const TaskBoard = () => {
  const defaultTasks = {
    id: crypto.randomUUID(),
    title: "iphone",
    description: "Iphone 14 is used for show off ",
    features: ["TrueDepth Camera", "Face ID", "Siri"],
    priority: "high",
    isFavourite: false,
  };
  const [tasks, setTasks] = useState([defaultTasks]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);
  function handleAddEditTask(newTask, isAdd) {
    console.log("Adding task with ID:", newTask.id);
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
    }
    onCloseClick();
  }

  function handleEditTask(task) {
    setTaskToUpdate(task);
    setShowAddModal(true);
  }
  function onCloseClick() {
    setShowAddModal(false);
    setTaskToUpdate(null);
  }

  function handleDeleteTask(taskId) {
    console.log("Deleting task with ID:", taskId);
    const tasksAfterDelete = tasks.filter((task) => task.id !== taskId);
    console.log("Remaining tasks:", tasksAfterDelete);
    setTasks(tasksAfterDelete);
  }
  function handleDeleteAllClick() {
    tasks.length = 0;
    setTasks([...tasks]);
  }
  function handleFavourite(taskId) {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, isFavorite: !task.isFavorite };
        } else {
          return task;
        }
      })
    );
  }
  return (
    <section className="mb-20" id="tasks">
      {showAddModal && (
        <AddTaskModal
          onSave={handleAddEditTask}
          taskToUpdate={taskToUpdate}
          onCloseClick={onCloseClick}
        ></AddTaskModal>
      )}
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchBox></SearchBox>
        </div>

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction
            onAddClick={() => setShowAddModal(true)}
            onDeleteAllClick={handleDeleteAllClick}
          />
          <TaskList
            tasks={tasks}
            onEdit={handleEditTask}
            onDelete={handleDeleteTask}
            onFav={handleFavourite}
          />
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
