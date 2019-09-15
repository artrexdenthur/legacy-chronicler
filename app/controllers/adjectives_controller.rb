class AdjectivesController < ApplicationController
  def index
    render json: Adjective.all, only: [:id, :name]
  end
end
