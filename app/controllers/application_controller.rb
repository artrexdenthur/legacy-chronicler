class ApplicationController < ActionController::Base
        include DeviseTokenAuth::Concerns::SetUserByToken
  def check_user
    return if user_signed_in?
    flash[:notice] = "You must sign in or sign up before continuing"
    redirect_to new_user_session_path, error: "You must sign in or sign up before continuing"
  end
end
