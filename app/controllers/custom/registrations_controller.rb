class Custom::RegistrationsController < DeviseTokenAuth::RegistrationsController

  def create
    super do |resource|
      puts resource
    end
  end
end