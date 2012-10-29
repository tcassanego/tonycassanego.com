require 'sinatra'
require 'haml'
require 'sinatra/assetpack'

configure :production do
  require 'newrelic_rpm'
end

set :haml, :format => :html5

Sinatra::Application.register Sinatra::AssetPack

assets {
  js :main, ['/js/main.js']
  css :main, ['/css/main.css']

  js_compression  :jsmin
  css_compression :simple
}

get '/' do
  haml :index
end
