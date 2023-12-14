import pandas as pd
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import CSVFile
from django.http import HttpResponse,JsonResponse
from rest_framework.parsers import MultiPartParser,FormParser
from .models import CSVFile
from .serializers import CSVFileSerializer




class CSVFileUploadView(APIView):
    parser_classes = ( MultiPartParser, FormParser)

    def post(self, request, *args, **kwargs):
        file_serializer = CSVFileSerializer(data=request.data)

        if file_serializer.is_valid():
            file_serializer.save()
            return Response(file_serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(file_serializer.errors, status=status.HTTP_400_BAD_REQUEST)



def calculate_mode(column):
    counts = {}
    for value in column:
        if value in counts:
            counts[value] += 1
        else:
            counts[value] = 1
    max_count = max(counts.values())
    mode_values = [key for key, value in counts.items() if value == max_count]
    return mode_values[0]


def output(request):
    node=CSVFile.objects.all()
    print(node[0].name)

    if len(node)==0 :
        return HttpResponse("No csv file in database !!")
    


    data = pd.read_csv(node[0].file)
    data=data.drop('variety',axis=1)
    mean_data = data.sum() / len(data)
    median_data = data.apply(sorted, axis=0).iloc[len(data) // 2]
    mode_data = data.apply(calculate_mode)
    squared_diff = (data - mean_data) ** 2
    var_data = squared_diff.sum() / (len(data) - 1)
    sd_data = var_data ** 0.5


    print("mean",mean_data[0])
    print("median",median_data[0])
    print("mode",mode_data[0])
    print("variance",var_data[0])
    print("standard deviation",sd_data[0])
    

    my_data={
        "name":node[0].name,
        "mean":mean_data.to_dict(),
        "median":median_data.to_dict(),
        "mode":mode_data.to_dict(),
        "variance":var_data.to_dict(),
        "std":sd_data.to_dict()
    }
    return JsonResponse(my_data)

