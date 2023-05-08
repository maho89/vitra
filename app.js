const App = {
    router : new kendo.Router(),
    data : await (await fetch("/api/init")).json()
};
localStorage.data = JSON.stringify(App.data);
App.layout = new kendo.Layout(await (await (fetch("/app/"+App.data.layout+"/index.html"))).text());
App.layout.render($("#app"));


for (const page of (App.data.pages || [])) {
    if (!App.data.main) App.data.main = page;
    App.router.route("/"+page.name, async function () {
        let v = new kendo.View(await (await (fetch("/app/"+page.name+"/index.html"))).text())
        App.layout.showIn("#content", v);
    });
};

App.router.start();


//App.router.navigate();


