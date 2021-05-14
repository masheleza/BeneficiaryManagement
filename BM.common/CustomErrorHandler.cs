using System;
namespace BM.common
{
    public class CustomErrorHandler
    {
        public string ErrorMessage { get; set; }
        public string PropertyName { get; set; }

        public CustomErrorHandler(string errorMessage)
        {
            this.ErrorMessage = errorMessage;
            this.PropertyName = string.Empty;
        }

        public CustomErrorHandler(string errorMessage, string prop)
        {
            this.ErrorMessage = errorMessage;
            this.PropertyName = prop;
        }

        public override string ToString()
        {
            return $"Property {PropertyName}, error message {ErrorMessage}";
        }
    }
}
