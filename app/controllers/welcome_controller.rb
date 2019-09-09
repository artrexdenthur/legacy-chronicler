class WelcomeController < ApplicationController
  before_action :check_user, only: [:app]
  def home
  end

  def app
  end

  def check_user
    return if user_signed_in?
    flash[:notice] = "You must sign in or sign up before continuing"
    redirect_to new_user_session_path, error: "You must sign in or sign up before continuing"
  end
end
