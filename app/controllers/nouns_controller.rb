class NounsController < ApplicationController
  def index
    render json: Noun.all, only: [:id, :name]
  end

  def show
    @noun = Noun.where(id: params[:id])[0]
    if @noun
      render json: @noun
    else
      render json: {status: "error", code: 404, message: "Resource does not exist"}
    end
  end

  def create
    @noun = Noun.new(name: params[:name])
    if @noun.save
      render json: @noun
    else
      render json: {status: "error", code: 400, message: @noun.errors.full_messages}
    end
  end
end
