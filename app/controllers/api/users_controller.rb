class Api::UsersController < ApplicationController
  before_action :check_user

  def show
    user = User.find_by_id(params[:id])
    unless user
      return render json: { status: 404, error: "User does not exist" }
    end
    render json: user
  end

  def index
    users = User.all
    render json: users
  end
end
