class NounsController < ApplicationController
  def index
    render json: Noun.all, only: [:id, :name]
  end
end
