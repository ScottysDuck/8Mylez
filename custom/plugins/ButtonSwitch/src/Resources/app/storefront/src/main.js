import BuyFeedback from './script/BuyFeedback'

window.PluginManager.override('AddToCart', BuyFeedback, '[data-add-to-cart]')