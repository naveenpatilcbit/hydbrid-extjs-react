/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 */
Ext.define("MyApp.view.main.Main", {
  extend: "Ext.container.Container",
  xtype: "myReactContainer",
  renderTo: Ext.getBody(),
  width: 400,
  height: 400,
  listeners: {
    afterrender: function () {
      const ReactElement = React.createElement;
      const { Header } = ReactLibrary.default.modules;
      ReactDOM.render(
        ReactElement(Header, null, "React Component"),
        document.getElementById("root")
      );
    },
  },
});
