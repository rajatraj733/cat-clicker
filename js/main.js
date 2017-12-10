// clear the screen for testing


var nums = [1,2,3];

var cats = [
    {
        name: 'cat1',
        src: 'https://lh5.ggpht.com/LfjkdmOKkGLvCt-VuRlWGjAjXqTBrPjRsokTNKBtCh8IFPRetGaXIpTQGE2e7ZCUaG2azKNkz38KkbM_emA=s0#w=640&h=454',
        clickCount: 0

    },
    {
        name: 'cat2',
        src: 'https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426',
        clickCount: 0
    },
    {
        name: 'cat3',
        src: 'https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496',
        clickCount: 0
    },
    {
        name: 'cat4',
        src: 'https://lh4.ggpht.com/dUJNejPqb_qLsV1kfWcvviqc7adxsw02BSAm8YLWNklP4lI6fQCLKXd-28uKuchtjoEUpqFN0K6kkTSDHw=s0#w=588&h=640',
        clickCount: 0
    }
];
var selectedCat;


var octopus = {
    init: function() {
        view.init(cats);
    },
    renderCat: function(cat) {

        return () => {
            selectedCat = cat;
            view.renderCat(cat)};
    },
    incrementClick: function() {

      return () => {
          selectedCat.clickCount++;
        view.renderClicks(selectedCat.clickCount);
      }
    },
    getSelectedCat: function() {
        return selectedCat;
    },
    updateCat: function(name, src, clickCount) {
        selectedCat.name = name;
        selectedCat.src = src;
        selectedCat.clickCount = clickCount;
        view.initList();
        view.renderCat();
        view.hideAdminDiv();
    },
    getAllCats: function() {
        return cats;
    }

};

var view = {
    init: function(cats) {
        this.catList = document.getElementById("cat-list");
        this.catDiv = document.getElementById("catDiv");
        this.catName = document.getElementById("cat-name");
        this.catImage = document.getElementById("cat-image");
        this.catClickCount = document.getElementById("cat-clickCount");
        this.initCatCanvas();
        this.initAdminViews();
        this.initList();

    },
    initList: function() {
        this.catList.innerHTML = '';
        const cats = octopus.getAllCats();
        cats.forEach((cat) => {
            let child = document.createElement("li");
            child.textContent = cat.name;
            child.addEventListener('click', octopus.renderCat(cat));
            this.catList.appendChild(child);
        });
    },
    initAdminViews: function() {
        this.adminButton = document.getElementById("adminButton");
        this.nameTextBox = document.getElementById("name");
        this.srcTextBox = document.getElementById("src");
        this.clickCountTextBox = document.getElementById("clickCount");
        this.saveButton = document.getElementById("saveButton");
        this.cancelButton = document.getElementById("cancelButton");
        this.adminDiv = document.getElementById("adminDiv");
        this.adminButton.addEventListener('click', function () {
            view.showAdminDiv();
        });
        this.cancelButton.addEventListener('click', function() {
            view.hideAdminDiv();
        });
        this.saveButton.addEventListener('click', function() {
            octopus.updateCat(view.nameTextBox.value, view.srcTextBox.value, view.clickCountTextBox.value);
        })
    },
    showAdminDiv: function() {
      this.adminDiv.style.display = 'block';
    },
    hideAdminDiv: function() {
        this.adminDiv.style.display = 'none';
    },
    renderAdminDiv: function() {
        const selectedCat = octopus.getSelectedCat();
        this.nameTextBox.value = selectedCat.name;
        this.srcTextBox.value = selectedCat.src;
        this.clickCountTextBox.value = selectedCat.clickCount;
    },
    initCatCanvas: function () {
        this.catDiv.style.position = 'absolute';
        this.catDiv.style.left = '400px';
        this.catDiv.style.top = '0px';
        this.catImage.addEventListener('click', octopus.incrementClick());
    },
    renderCat: function() {
        const cat = octopus.getSelectedCat();
        this.catName.textContent = cat.name;
        this.catClickCount.textContent = cat.clickCount;
        this.catImage.setAttribute('src', cat.src);
        this.renderAdminDiv();
    },
    renderClicks: function() {
        const num  = octopus.getSelectedCat().clickCount;
        this.catClickCount.textContent = num;
        this.renderAdminDiv();
    }

};
octopus.init();


/*var e = document.createElement("div");
document.body.appendChild(e);*/

// Let's loop over the numbers in our array
/*for (var i = 0; i < cats.length; i++) {

    // This is the number we're on...
    var name = cats[i].name;

    // We're creating a DOM element for the number
    var elem = document.createElement('div');
    elem.textContent = name;

    // ... and when we click, alert the value of `name`
    elem.addEventListener('click', (function(numCopy) {
        var click = 0;
        return function() {
            e.innerHTML = '';
            var img = document.createElement('img');
            img.setAttribute('src', cats[numCopy].src);
            e.appendChild(img);
            var div = document.createElement('div');
            div.textContent = click;
            e.appendChild(div);
            img.addEventListener('click', function() {
               click++;
               div.textContent = click;
            });
            // alert(numCop);
        }
    })(i));

    // finally, let's add this element to the document
    document.body.appendChild(elem);
};*/
