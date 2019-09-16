class AdjectivesController < ApplicationController
  def index
    Adjective.first
    render json: Adjective.all, only: [:id, :name]
  end

  def show
    @adjective = Adjective.where(id: params[:id])[0]
    if @adjective
      render json: @adjective
    else
      render json: {status: "error", code: 404, message: "Resource does not exist"}
    end
  end

  def create
    @adjective = Adjective.new(name: params[:name])
    if @adjective.save
      render json: @adjective
    else
      render json: {status: "error", code: 400, message: @adjective.errors.full_messages}
    end
  end

end
