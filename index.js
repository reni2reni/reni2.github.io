/* global BF2042Portal, _Blockly */
(function () {
    const plugin = BF2042Portal.Plugins.getPlugin("red-variables");

    plugin.initializeWorkspace = function () {
        /** @type import("blockly").Theme */
        const theme = _Blockly.getMainWorkspace().getTheme();

        const variableStyle = theme.blockStyles["variable-block-style"];
        variableStyle.colourPrimary = "#b53e3e";
        variableStyle.colourSecondary = "#382424";
        variableStyle.colourTertiary = "#382424";

        _Blockly.getMainWorkspace().setTheme(theme);
    };
})();
