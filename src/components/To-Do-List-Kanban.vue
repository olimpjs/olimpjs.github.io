<template>
    <main class="container">
    <div class="kanban" id="app">

    </div>

    <div class="modal"> 
      <div class="modal__container">
        <a href="#" class="close-modal">✖</a> 
        <form>
          <input type="text" id="title-task" name="title" placeholder="Введите заголовок задачи"/>
          <textarea id="description-task" name="description" placeholder="Введите описание задачи"></textarea>
          <input type="date" name="date" placeholder="Выберите дату"/>
          <select class="complexity-task" id="complexity-task" name="complexity">
            <option value="low">Низкий приоритет</option>
            <option value="medium">Средний приоритет</option>
            <option value="high">Высокий приоритет</option>
          </select>
          <button type="submit">Отправить</button>
          <button type="button" class="cancel-button">Отмена</button> 
        </form>
      </div>
    </div>
    <div class="edit-modal" id="edit-modal">
      <div class="edit-modal__container">
        <h2 class="edit-modal__title">Редактирование задачи</h2>
        <a href="#" class="close-modal">✖</a>
        <form id="edit-task-form">
          <input type="text" id="title-task" name="title" placeholder="Введите заголовок задачи"/>
          <textarea id="description-task" name="description" placeholder="Введите описание задачи"></textarea>
          <input type="date" name="date" placeholder="Выберите дату"/>
          <select class="complexity-task" id="complexity-task" name="complexity">
            <option value="low">Низкий приоритет</option>
            <option value="medium">Средний приоритет</option>
            <option value="high">Высокий приоритет</option>
          </select>
          <button type="submit" class="edit-task-button">Сохранить</button>
          <button type="submit" class="cancel-edit-button">Отмена</button>
        </form>
      </div>
    </div>
  </main>

  <footer class="footer">
    <p class="footer__text">To-Do-List-Kanban</p>
  </footer>
  </template>

  <style></style>

  
  <script>
  document.addEventListener("DOMContentLoaded", () => {
    renderKanban();
  
    const addTaskButtons = document.querySelectorAll(".kanban__icon--add");
    const modal = document.querySelector(".modal");
    const closeModalButton = document.querySelector(".close-modal");
    const cancelButton = document.querySelector(".cancel-button");
    const form = document.querySelector(".modal form");
    const title = document.getElementById("title-task").value;
    const description = document.getElementById("description-task").value;
    const dueDate = form.elements["date"].value;
    const complexity = form.elements["complexity"].value;
    // Обработчик события отправки формы создания задачи
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
  
      
      const task = {
        id: new Date ().getTime (),
        title,
        description,
        dueDate,
        complexity
      };
  
      const column = columns.find((column) => column.id === "to-do");
  
      column.tasks.push(task.id);
      renderTaskElement(task, column);
  
      modal.style.display = "none";
  
      form.reset();
    });
  
    // Обработчик события клика по кнопке "Добавить задачу"
    addTaskButtons.forEach((button) => {
      button.addEventListener("click", () => {
        modal.style.display = "flex";
      });
    });
  
    // Обработчик события клика по кнопке "Закрыть" в модальном окне
    closeModalButton.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    // Обработчик события клика по кнопке "Отмена" в модальном окне
    cancelButton.addEventListener("click", () => {
      modal.style.display = "none";
    });
  });
  
  // =========================================================================
  function renderTaskElement(task, column) {
    const taskElement = document.createElement("div");
    taskElement.className = "task-item";
    taskElement.innerHTML = `
      <div class="task-item__info">
        <h3 class="task-item__title">${task.title}</h3>
        <div class="task-item__complexity">
          <div class="complexity__dot complexity__dot--${task.complexity}"></div>
          <span>${task.complexity}</span>
        </div>
      </div>
      <p class="task-item__description">${task.description}</p>
      <p class="task-item__due-date"> ${task.dueDate}</p>
      <button class="edit-task-button" data-task-id="${task.id}">Редактировать</button>
    `;
  
    const listContainer = document.querySelector(`.kanban__column--${column.id} .kanban__list`);
    listContainer.appendChild(taskElement);
  }
  
  // =========================================================================
  
  function renderKanban() {
    const kanbanContainer = document.querySelector(".kanban");
  
    columns.forEach((column) => {
      const columnSection = document.createElement("section");
      columnSection.className = `kanban__column kanban__column--${column.id}`;
      columnSection.innerHTML = `
            <div class="kanban__header">
              <div class="kanban__header-content">
                <img src="${column.icon}" alt="Колонка ${column.title}" class="kanban__icon kanban__icon--column">
                <h2 class="kanban__title">${column.title}</h2>
              </div>
              <img src="./src/assets/img/kanban/plus.svg" alt="Добавить задачу" class="kanban__icon kanban__icon--add">
            </div>
            <div class="kanban__list"></div>
          `;
  
      kanbanContainer.appendChild(columnSection);
    });
  
  }
  </script>