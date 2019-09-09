class WelcomeController < ApplicationController
  before_action :check_user, only: [:app]
  def home
  end

  def app
  end

end
