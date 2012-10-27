require 'sinatra'
require 'haml'

set :haml, :format => :html5

configure :production do
  require 'newrelic_rpm'
end

get '/' do
  haml :index
end
