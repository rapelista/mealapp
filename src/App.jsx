import { RouterProvider, createHashRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { MealCategoryPage } from "./pages/MealCategoryPage";
import { MealsByCategoryPage } from "./pages/MealsByCategoryPage";
import { MealDetailPage } from "./pages/MealDetailPage";
import { LocalCulinaryPage } from "./pages/LocalCulinaryPage";
import { MealsByAreaPage } from "./pages/MealsByAreaPage";

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'meals',
        children: [
          {
            index: true,
            element: <MealCategoryPage />,
          },
          {
            path: ":mealCategory",
            children: [
              {
                index: true,
                element: <MealsByCategoryPage />,
              },
              {
                path: ":idMeal",
                element: <MealDetailPage />
              }
            ]
          }
        ]
      },
      {
        path: "local-culinary",
        children: [
          {
            index: true,
            element: <LocalCulinaryPage />,
          },
          {
            path: ":mealArea",
            children: [
              {
                index: true,
                element: <MealsByAreaPage />,
              },
              {
                path: ":idMeal",
                element: <MealDetailPage />
              }
            ]
          }
        ]
      },
    ]
  }
]);

export const App = () => {
  return (
    <RouterProvider router={router} />
  );
};
