# component breakdown

first break down into components

# convert template from html to react

# Tasklist

since tasklist is a parent component declare state here
create an object and pass into initail state

```
const defaultTasks = {
    id: crypto.randomUUID(),
    title: "learn react",
    description: "react is used for user interactivity ",
    tags: ["web", "html", "css"],
    priority: "high",
    isFavourite: false,
  };
```

now pass into tasklist component

```
 <TaskList tasks={tasks} />
```

now map it to render as it is an array

# modal add task

```
const [showAddModal, setShowAddModal] = useState(false);
```

when clicking show modal is seen

it renders between hero section and tasklist needs to open like modal
so give style

change for with htmlFor
task name and corresponding html name should be same
pass two things on input field value and a method
1 ta method diye sob koto input re control kora hoi

```
const [task, setTask] = useState({
    // id: crypto.randomUUID(),
    title: "",
    description: "",
    tags: [],
    priority: "",
    isFavorite: false,
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
     if (name=='tags'){
        value=value.split(',')
    }

    setTask({ ...task },
        [name]:value);
  };
```

jokon handle change method call korbo tokon handlee change method name dekbe suppose name=title
r title value ta state e judi thake ,input name and object name same thakle tokon value change korbe

# edit task

- it is in task list so when clikcing button modal pops up
- modal e judi task pass korte paree
- cant pass component to normal function instead call useSTate

- 2 things
  user add korse or edit korse
  when edit data should be changed not default
