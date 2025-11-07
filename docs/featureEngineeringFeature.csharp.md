# `featureEngineeringFeature` Submodule <a name="`featureEngineeringFeature` Submodule" id="@cdktf/provider-databricks.featureEngineeringFeature"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FeatureEngineeringFeature <a name="FeatureEngineeringFeature" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_feature databricks_feature_engineering_feature}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new FeatureEngineeringFeature(Construct Scope, string Id, FeatureEngineeringFeatureConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig">FeatureEngineeringFeatureConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig">FeatureEngineeringFeatureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.putFunction">PutFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.putTimeWindow">PutTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.resetFilterCondition">ResetFilterCondition</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFunction` <a name="PutFunction" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.putFunction"></a>

```csharp
private void PutFunction(FeatureEngineeringFeatureFunction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.putFunction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunction">FeatureEngineeringFeatureFunction</a>

---

##### `PutSource` <a name="PutSource" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.putSource"></a>

```csharp
private void PutSource(FeatureEngineeringFeatureSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSource">FeatureEngineeringFeatureSource</a>

---

##### `PutTimeWindow` <a name="PutTimeWindow" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.putTimeWindow"></a>

```csharp
private void PutTimeWindow(FeatureEngineeringFeatureTimeWindow Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.putTimeWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindow">FeatureEngineeringFeatureTimeWindow</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFilterCondition` <a name="ResetFilterCondition" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.resetFilterCondition"></a>

```csharp
private void ResetFilterCondition()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a FeatureEngineeringFeature resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

FeatureEngineeringFeature.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

FeatureEngineeringFeature.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

FeatureEngineeringFeature.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

FeatureEngineeringFeature.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a FeatureEngineeringFeature resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FeatureEngineeringFeature to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FeatureEngineeringFeature that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_feature#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the FeatureEngineeringFeature to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.function">Function</a></code> | <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference">FeatureEngineeringFeatureFunctionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.source">Source</a></code> | <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference">FeatureEngineeringFeatureSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.timeWindow">TimeWindow</a></code> | <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference">FeatureEngineeringFeatureTimeWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.filterConditionInput">FilterConditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.fullNameInput">FullNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.functionInput">FunctionInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunction">FeatureEngineeringFeatureFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.inputsInput">InputsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.sourceInput">SourceInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSource">FeatureEngineeringFeatureSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.timeWindowInput">TimeWindowInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindow">FeatureEngineeringFeatureTimeWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.filterCondition">FilterCondition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.fullName">FullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.inputs">Inputs</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Function`<sup>Required</sup> <a name="Function" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.function"></a>

```csharp
public FeatureEngineeringFeatureFunctionOutputReference Function { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference">FeatureEngineeringFeatureFunctionOutputReference</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.source"></a>

```csharp
public FeatureEngineeringFeatureSourceOutputReference Source { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference">FeatureEngineeringFeatureSourceOutputReference</a>

---

##### `TimeWindow`<sup>Required</sup> <a name="TimeWindow" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.timeWindow"></a>

```csharp
public FeatureEngineeringFeatureTimeWindowOutputReference TimeWindow { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference">FeatureEngineeringFeatureTimeWindowOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FilterConditionInput`<sup>Optional</sup> <a name="FilterConditionInput" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.filterConditionInput"></a>

```csharp
public string FilterConditionInput { get; }
```

- *Type:* string

---

##### `FullNameInput`<sup>Optional</sup> <a name="FullNameInput" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.fullNameInput"></a>

```csharp
public string FullNameInput { get; }
```

- *Type:* string

---

##### `FunctionInput`<sup>Optional</sup> <a name="FunctionInput" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.functionInput"></a>

```csharp
public IResolvable|FeatureEngineeringFeatureFunction FunctionInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunction">FeatureEngineeringFeatureFunction</a>

---

##### `InputsInput`<sup>Optional</sup> <a name="InputsInput" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.inputsInput"></a>

```csharp
public string[] InputsInput { get; }
```

- *Type:* string[]

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.sourceInput"></a>

```csharp
public IResolvable|FeatureEngineeringFeatureSource SourceInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSource">FeatureEngineeringFeatureSource</a>

---

##### `TimeWindowInput`<sup>Optional</sup> <a name="TimeWindowInput" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.timeWindowInput"></a>

```csharp
public IResolvable|FeatureEngineeringFeatureTimeWindow TimeWindowInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindow">FeatureEngineeringFeatureTimeWindow</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FilterCondition`<sup>Required</sup> <a name="FilterCondition" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.filterCondition"></a>

```csharp
public string FilterCondition { get; }
```

- *Type:* string

---

##### `FullName`<sup>Required</sup> <a name="FullName" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.fullName"></a>

```csharp
public string FullName { get; }
```

- *Type:* string

---

##### `Inputs`<sup>Required</sup> <a name="Inputs" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.inputs"></a>

```csharp
public string[] Inputs { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeature.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FeatureEngineeringFeatureConfig <a name="FeatureEngineeringFeatureConfig" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new FeatureEngineeringFeatureConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string FullName,
    FeatureEngineeringFeatureFunction Function,
    string[] Inputs,
    FeatureEngineeringFeatureSource Source,
    FeatureEngineeringFeatureTimeWindow TimeWindow,
    string Description = null,
    string FilterCondition = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.fullName">FullName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_feature#full_name FeatureEngineeringFeature#full_name}. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.function">Function</a></code> | <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunction">FeatureEngineeringFeatureFunction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_feature#function FeatureEngineeringFeature#function}. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.inputs">Inputs</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_feature#inputs FeatureEngineeringFeature#inputs}. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.source">Source</a></code> | <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSource">FeatureEngineeringFeatureSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_feature#source FeatureEngineeringFeature#source}. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.timeWindow">TimeWindow</a></code> | <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindow">FeatureEngineeringFeatureTimeWindow</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_feature#time_window FeatureEngineeringFeature#time_window}. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_feature#description FeatureEngineeringFeature#description}. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.filterCondition">FilterCondition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_feature#filter_condition FeatureEngineeringFeature#filter_condition}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `FullName`<sup>Required</sup> <a name="FullName" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.fullName"></a>

```csharp
public string FullName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_feature#full_name FeatureEngineeringFeature#full_name}.

---

##### `Function`<sup>Required</sup> <a name="Function" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.function"></a>

```csharp
public FeatureEngineeringFeatureFunction Function { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunction">FeatureEngineeringFeatureFunction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_feature#function FeatureEngineeringFeature#function}.

---

##### `Inputs`<sup>Required</sup> <a name="Inputs" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.inputs"></a>

```csharp
public string[] Inputs { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_feature#inputs FeatureEngineeringFeature#inputs}.

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.source"></a>

```csharp
public FeatureEngineeringFeatureSource Source { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSource">FeatureEngineeringFeatureSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_feature#source FeatureEngineeringFeature#source}.

---

##### `TimeWindow`<sup>Required</sup> <a name="TimeWindow" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.timeWindow"></a>

```csharp
public FeatureEngineeringFeatureTimeWindow TimeWindow { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindow">FeatureEngineeringFeatureTimeWindow</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_feature#time_window FeatureEngineeringFeature#time_window}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_feature#description FeatureEngineeringFeature#description}.

---

##### `FilterCondition`<sup>Optional</sup> <a name="FilterCondition" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureConfig.property.filterCondition"></a>

```csharp
public string FilterCondition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_feature#filter_condition FeatureEngineeringFeature#filter_condition}.

---

### FeatureEngineeringFeatureFunction <a name="FeatureEngineeringFeatureFunction" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new FeatureEngineeringFeatureFunction {
    string FunctionType,
    IResolvable|FeatureEngineeringFeatureFunctionExtraParameters[] ExtraParameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunction.property.functionType">FunctionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_feature#function_type FeatureEngineeringFeature#function_type}. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunction.property.extraParameters">ExtraParameters</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParameters">FeatureEngineeringFeatureFunctionExtraParameters</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_feature#extra_parameters FeatureEngineeringFeature#extra_parameters}. |

---

##### `FunctionType`<sup>Required</sup> <a name="FunctionType" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunction.property.functionType"></a>

```csharp
public string FunctionType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_feature#function_type FeatureEngineeringFeature#function_type}.

---

##### `ExtraParameters`<sup>Optional</sup> <a name="ExtraParameters" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunction.property.extraParameters"></a>

```csharp
public IResolvable|FeatureEngineeringFeatureFunctionExtraParameters[] ExtraParameters { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParameters">FeatureEngineeringFeatureFunctionExtraParameters</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_feature#extra_parameters FeatureEngineeringFeature#extra_parameters}.

---

### FeatureEngineeringFeatureFunctionExtraParameters <a name="FeatureEngineeringFeatureFunctionExtraParameters" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParameters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new FeatureEngineeringFeatureFunctionExtraParameters {
    string Key,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParameters.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_feature#key FeatureEngineeringFeature#key}. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParameters.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_feature#value FeatureEngineeringFeature#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParameters.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_feature#key FeatureEngineeringFeature#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParameters.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_feature#value FeatureEngineeringFeature#value}.

---

### FeatureEngineeringFeatureSource <a name="FeatureEngineeringFeatureSource" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new FeatureEngineeringFeatureSource {
    FeatureEngineeringFeatureSourceDeltaTableSource DeltaTableSource = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSource.property.deltaTableSource">DeltaTableSource</a></code> | <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSource">FeatureEngineeringFeatureSourceDeltaTableSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_feature#delta_table_source FeatureEngineeringFeature#delta_table_source}. |

---

##### `DeltaTableSource`<sup>Optional</sup> <a name="DeltaTableSource" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSource.property.deltaTableSource"></a>

```csharp
public FeatureEngineeringFeatureSourceDeltaTableSource DeltaTableSource { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSource">FeatureEngineeringFeatureSourceDeltaTableSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_feature#delta_table_source FeatureEngineeringFeature#delta_table_source}.

---

### FeatureEngineeringFeatureSourceDeltaTableSource <a name="FeatureEngineeringFeatureSourceDeltaTableSource" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new FeatureEngineeringFeatureSourceDeltaTableSource {
    string[] EntityColumns,
    string FullName,
    string TimeseriesColumn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSource.property.entityColumns">EntityColumns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_feature#entity_columns FeatureEngineeringFeature#entity_columns}. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSource.property.fullName">FullName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_feature#full_name FeatureEngineeringFeature#full_name}. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSource.property.timeseriesColumn">TimeseriesColumn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_feature#timeseries_column FeatureEngineeringFeature#timeseries_column}. |

---

##### `EntityColumns`<sup>Required</sup> <a name="EntityColumns" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSource.property.entityColumns"></a>

```csharp
public string[] EntityColumns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_feature#entity_columns FeatureEngineeringFeature#entity_columns}.

---

##### `FullName`<sup>Required</sup> <a name="FullName" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSource.property.fullName"></a>

```csharp
public string FullName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_feature#full_name FeatureEngineeringFeature#full_name}.

---

##### `TimeseriesColumn`<sup>Required</sup> <a name="TimeseriesColumn" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSource.property.timeseriesColumn"></a>

```csharp
public string TimeseriesColumn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_feature#timeseries_column FeatureEngineeringFeature#timeseries_column}.

---

### FeatureEngineeringFeatureTimeWindow <a name="FeatureEngineeringFeatureTimeWindow" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new FeatureEngineeringFeatureTimeWindow {
    FeatureEngineeringFeatureTimeWindowContinuous Continuous = null,
    FeatureEngineeringFeatureTimeWindowSliding Sliding = null,
    FeatureEngineeringFeatureTimeWindowTumbling Tumbling = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindow.property.continuous">Continuous</a></code> | <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuous">FeatureEngineeringFeatureTimeWindowContinuous</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_feature#continuous FeatureEngineeringFeature#continuous}. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindow.property.sliding">Sliding</a></code> | <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSliding">FeatureEngineeringFeatureTimeWindowSliding</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_feature#sliding FeatureEngineeringFeature#sliding}. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindow.property.tumbling">Tumbling</a></code> | <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumbling">FeatureEngineeringFeatureTimeWindowTumbling</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_feature#tumbling FeatureEngineeringFeature#tumbling}. |

---

##### `Continuous`<sup>Optional</sup> <a name="Continuous" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindow.property.continuous"></a>

```csharp
public FeatureEngineeringFeatureTimeWindowContinuous Continuous { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuous">FeatureEngineeringFeatureTimeWindowContinuous</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_feature#continuous FeatureEngineeringFeature#continuous}.

---

##### `Sliding`<sup>Optional</sup> <a name="Sliding" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindow.property.sliding"></a>

```csharp
public FeatureEngineeringFeatureTimeWindowSliding Sliding { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSliding">FeatureEngineeringFeatureTimeWindowSliding</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_feature#sliding FeatureEngineeringFeature#sliding}.

---

##### `Tumbling`<sup>Optional</sup> <a name="Tumbling" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindow.property.tumbling"></a>

```csharp
public FeatureEngineeringFeatureTimeWindowTumbling Tumbling { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumbling">FeatureEngineeringFeatureTimeWindowTumbling</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_feature#tumbling FeatureEngineeringFeature#tumbling}.

---

### FeatureEngineeringFeatureTimeWindowContinuous <a name="FeatureEngineeringFeatureTimeWindowContinuous" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuous"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuous.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new FeatureEngineeringFeatureTimeWindowContinuous {
    string WindowDuration,
    string Offset = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuous.property.windowDuration">WindowDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_feature#window_duration FeatureEngineeringFeature#window_duration}. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuous.property.offset">Offset</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_feature#offset FeatureEngineeringFeature#offset}. |

---

##### `WindowDuration`<sup>Required</sup> <a name="WindowDuration" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuous.property.windowDuration"></a>

```csharp
public string WindowDuration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_feature#window_duration FeatureEngineeringFeature#window_duration}.

---

##### `Offset`<sup>Optional</sup> <a name="Offset" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuous.property.offset"></a>

```csharp
public string Offset { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_feature#offset FeatureEngineeringFeature#offset}.

---

### FeatureEngineeringFeatureTimeWindowSliding <a name="FeatureEngineeringFeatureTimeWindowSliding" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSliding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSliding.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new FeatureEngineeringFeatureTimeWindowSliding {
    string SlideDuration,
    string WindowDuration
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSliding.property.slideDuration">SlideDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_feature#slide_duration FeatureEngineeringFeature#slide_duration}. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSliding.property.windowDuration">WindowDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_feature#window_duration FeatureEngineeringFeature#window_duration}. |

---

##### `SlideDuration`<sup>Required</sup> <a name="SlideDuration" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSliding.property.slideDuration"></a>

```csharp
public string SlideDuration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_feature#slide_duration FeatureEngineeringFeature#slide_duration}.

---

##### `WindowDuration`<sup>Required</sup> <a name="WindowDuration" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSliding.property.windowDuration"></a>

```csharp
public string WindowDuration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_feature#window_duration FeatureEngineeringFeature#window_duration}.

---

### FeatureEngineeringFeatureTimeWindowTumbling <a name="FeatureEngineeringFeatureTimeWindowTumbling" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumbling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumbling.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new FeatureEngineeringFeatureTimeWindowTumbling {
    string WindowDuration
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumbling.property.windowDuration">WindowDuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_feature#window_duration FeatureEngineeringFeature#window_duration}. |

---

##### `WindowDuration`<sup>Required</sup> <a name="WindowDuration" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumbling.property.windowDuration"></a>

```csharp
public string WindowDuration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/feature_engineering_feature#window_duration FeatureEngineeringFeature#window_duration}.

---

## Classes <a name="Classes" id="Classes"></a>

### FeatureEngineeringFeatureFunctionExtraParametersList <a name="FeatureEngineeringFeatureFunctionExtraParametersList" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new FeatureEngineeringFeatureFunctionExtraParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.get"></a>

```csharp
private FeatureEngineeringFeatureFunctionExtraParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParameters">FeatureEngineeringFeatureFunctionExtraParameters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList.property.internalValue"></a>

```csharp
public IResolvable|FeatureEngineeringFeatureFunctionExtraParameters[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParameters">FeatureEngineeringFeatureFunctionExtraParameters</a>[]

---


### FeatureEngineeringFeatureFunctionExtraParametersOutputReference <a name="FeatureEngineeringFeatureFunctionExtraParametersOutputReference" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new FeatureEngineeringFeatureFunctionExtraParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParameters">FeatureEngineeringFeatureFunctionExtraParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FeatureEngineeringFeatureFunctionExtraParameters InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParameters">FeatureEngineeringFeatureFunctionExtraParameters</a>

---


### FeatureEngineeringFeatureFunctionOutputReference <a name="FeatureEngineeringFeatureFunctionOutputReference" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new FeatureEngineeringFeatureFunctionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.putExtraParameters">PutExtraParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.resetExtraParameters">ResetExtraParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExtraParameters` <a name="PutExtraParameters" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.putExtraParameters"></a>

```csharp
private void PutExtraParameters(IResolvable|FeatureEngineeringFeatureFunctionExtraParameters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.putExtraParameters.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParameters">FeatureEngineeringFeatureFunctionExtraParameters</a>[]

---

##### `ResetExtraParameters` <a name="ResetExtraParameters" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.resetExtraParameters"></a>

```csharp
private void ResetExtraParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.property.extraParameters">ExtraParameters</a></code> | <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList">FeatureEngineeringFeatureFunctionExtraParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.property.extraParametersInput">ExtraParametersInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParameters">FeatureEngineeringFeatureFunctionExtraParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.property.functionTypeInput">FunctionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.property.functionType">FunctionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunction">FeatureEngineeringFeatureFunction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExtraParameters`<sup>Required</sup> <a name="ExtraParameters" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.property.extraParameters"></a>

```csharp
public FeatureEngineeringFeatureFunctionExtraParametersList ExtraParameters { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParametersList">FeatureEngineeringFeatureFunctionExtraParametersList</a>

---

##### `ExtraParametersInput`<sup>Optional</sup> <a name="ExtraParametersInput" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.property.extraParametersInput"></a>

```csharp
public IResolvable|FeatureEngineeringFeatureFunctionExtraParameters[] ExtraParametersInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionExtraParameters">FeatureEngineeringFeatureFunctionExtraParameters</a>[]

---

##### `FunctionTypeInput`<sup>Optional</sup> <a name="FunctionTypeInput" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.property.functionTypeInput"></a>

```csharp
public string FunctionTypeInput { get; }
```

- *Type:* string

---

##### `FunctionType`<sup>Required</sup> <a name="FunctionType" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.property.functionType"></a>

```csharp
public string FunctionType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunctionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FeatureEngineeringFeatureFunction InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureFunction">FeatureEngineeringFeatureFunction</a>

---


### FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference <a name="FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.entityColumnsInput">EntityColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.fullNameInput">FullNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.timeseriesColumnInput">TimeseriesColumnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.entityColumns">EntityColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.fullName">FullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.timeseriesColumn">TimeseriesColumn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSource">FeatureEngineeringFeatureSourceDeltaTableSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EntityColumnsInput`<sup>Optional</sup> <a name="EntityColumnsInput" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.entityColumnsInput"></a>

```csharp
public string[] EntityColumnsInput { get; }
```

- *Type:* string[]

---

##### `FullNameInput`<sup>Optional</sup> <a name="FullNameInput" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.fullNameInput"></a>

```csharp
public string FullNameInput { get; }
```

- *Type:* string

---

##### `TimeseriesColumnInput`<sup>Optional</sup> <a name="TimeseriesColumnInput" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.timeseriesColumnInput"></a>

```csharp
public string TimeseriesColumnInput { get; }
```

- *Type:* string

---

##### `EntityColumns`<sup>Required</sup> <a name="EntityColumns" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.entityColumns"></a>

```csharp
public string[] EntityColumns { get; }
```

- *Type:* string[]

---

##### `FullName`<sup>Required</sup> <a name="FullName" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.fullName"></a>

```csharp
public string FullName { get; }
```

- *Type:* string

---

##### `TimeseriesColumn`<sup>Required</sup> <a name="TimeseriesColumn" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.timeseriesColumn"></a>

```csharp
public string TimeseriesColumn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FeatureEngineeringFeatureSourceDeltaTableSource InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSource">FeatureEngineeringFeatureSourceDeltaTableSource</a>

---


### FeatureEngineeringFeatureSourceOutputReference <a name="FeatureEngineeringFeatureSourceOutputReference" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new FeatureEngineeringFeatureSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.putDeltaTableSource">PutDeltaTableSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.resetDeltaTableSource">ResetDeltaTableSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDeltaTableSource` <a name="PutDeltaTableSource" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.putDeltaTableSource"></a>

```csharp
private void PutDeltaTableSource(FeatureEngineeringFeatureSourceDeltaTableSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.putDeltaTableSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSource">FeatureEngineeringFeatureSourceDeltaTableSource</a>

---

##### `ResetDeltaTableSource` <a name="ResetDeltaTableSource" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.resetDeltaTableSource"></a>

```csharp
private void ResetDeltaTableSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.property.deltaTableSource">DeltaTableSource</a></code> | <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference">FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.property.deltaTableSourceInput">DeltaTableSourceInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSource">FeatureEngineeringFeatureSourceDeltaTableSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSource">FeatureEngineeringFeatureSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeltaTableSource`<sup>Required</sup> <a name="DeltaTableSource" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.property.deltaTableSource"></a>

```csharp
public FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference DeltaTableSource { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference">FeatureEngineeringFeatureSourceDeltaTableSourceOutputReference</a>

---

##### `DeltaTableSourceInput`<sup>Optional</sup> <a name="DeltaTableSourceInput" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.property.deltaTableSourceInput"></a>

```csharp
public IResolvable|FeatureEngineeringFeatureSourceDeltaTableSource DeltaTableSourceInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceDeltaTableSource">FeatureEngineeringFeatureSourceDeltaTableSource</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSourceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FeatureEngineeringFeatureSource InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureSource">FeatureEngineeringFeatureSource</a>

---


### FeatureEngineeringFeatureTimeWindowContinuousOutputReference <a name="FeatureEngineeringFeatureTimeWindowContinuousOutputReference" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new FeatureEngineeringFeatureTimeWindowContinuousOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.resetOffset">ResetOffset</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOffset` <a name="ResetOffset" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.resetOffset"></a>

```csharp
private void ResetOffset()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.property.offsetInput">OffsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.property.windowDurationInput">WindowDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.property.offset">Offset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.property.windowDuration">WindowDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuous">FeatureEngineeringFeatureTimeWindowContinuous</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OffsetInput`<sup>Optional</sup> <a name="OffsetInput" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.property.offsetInput"></a>

```csharp
public string OffsetInput { get; }
```

- *Type:* string

---

##### `WindowDurationInput`<sup>Optional</sup> <a name="WindowDurationInput" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.property.windowDurationInput"></a>

```csharp
public string WindowDurationInput { get; }
```

- *Type:* string

---

##### `Offset`<sup>Required</sup> <a name="Offset" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.property.offset"></a>

```csharp
public string Offset { get; }
```

- *Type:* string

---

##### `WindowDuration`<sup>Required</sup> <a name="WindowDuration" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.property.windowDuration"></a>

```csharp
public string WindowDuration { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FeatureEngineeringFeatureTimeWindowContinuous InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuous">FeatureEngineeringFeatureTimeWindowContinuous</a>

---


### FeatureEngineeringFeatureTimeWindowOutputReference <a name="FeatureEngineeringFeatureTimeWindowOutputReference" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new FeatureEngineeringFeatureTimeWindowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.putContinuous">PutContinuous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.putSliding">PutSliding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.putTumbling">PutTumbling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.resetContinuous">ResetContinuous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.resetSliding">ResetSliding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.resetTumbling">ResetTumbling</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContinuous` <a name="PutContinuous" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.putContinuous"></a>

```csharp
private void PutContinuous(FeatureEngineeringFeatureTimeWindowContinuous Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.putContinuous.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuous">FeatureEngineeringFeatureTimeWindowContinuous</a>

---

##### `PutSliding` <a name="PutSliding" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.putSliding"></a>

```csharp
private void PutSliding(FeatureEngineeringFeatureTimeWindowSliding Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.putSliding.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSliding">FeatureEngineeringFeatureTimeWindowSliding</a>

---

##### `PutTumbling` <a name="PutTumbling" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.putTumbling"></a>

```csharp
private void PutTumbling(FeatureEngineeringFeatureTimeWindowTumbling Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.putTumbling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumbling">FeatureEngineeringFeatureTimeWindowTumbling</a>

---

##### `ResetContinuous` <a name="ResetContinuous" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.resetContinuous"></a>

```csharp
private void ResetContinuous()
```

##### `ResetSliding` <a name="ResetSliding" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.resetSliding"></a>

```csharp
private void ResetSliding()
```

##### `ResetTumbling` <a name="ResetTumbling" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.resetTumbling"></a>

```csharp
private void ResetTumbling()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.property.continuous">Continuous</a></code> | <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference">FeatureEngineeringFeatureTimeWindowContinuousOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.property.sliding">Sliding</a></code> | <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference">FeatureEngineeringFeatureTimeWindowSlidingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.property.tumbling">Tumbling</a></code> | <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference">FeatureEngineeringFeatureTimeWindowTumblingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.property.continuousInput">ContinuousInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuous">FeatureEngineeringFeatureTimeWindowContinuous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.property.slidingInput">SlidingInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSliding">FeatureEngineeringFeatureTimeWindowSliding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.property.tumblingInput">TumblingInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumbling">FeatureEngineeringFeatureTimeWindowTumbling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindow">FeatureEngineeringFeatureTimeWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Continuous`<sup>Required</sup> <a name="Continuous" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.property.continuous"></a>

```csharp
public FeatureEngineeringFeatureTimeWindowContinuousOutputReference Continuous { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuousOutputReference">FeatureEngineeringFeatureTimeWindowContinuousOutputReference</a>

---

##### `Sliding`<sup>Required</sup> <a name="Sliding" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.property.sliding"></a>

```csharp
public FeatureEngineeringFeatureTimeWindowSlidingOutputReference Sliding { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference">FeatureEngineeringFeatureTimeWindowSlidingOutputReference</a>

---

##### `Tumbling`<sup>Required</sup> <a name="Tumbling" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.property.tumbling"></a>

```csharp
public FeatureEngineeringFeatureTimeWindowTumblingOutputReference Tumbling { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference">FeatureEngineeringFeatureTimeWindowTumblingOutputReference</a>

---

##### `ContinuousInput`<sup>Optional</sup> <a name="ContinuousInput" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.property.continuousInput"></a>

```csharp
public IResolvable|FeatureEngineeringFeatureTimeWindowContinuous ContinuousInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowContinuous">FeatureEngineeringFeatureTimeWindowContinuous</a>

---

##### `SlidingInput`<sup>Optional</sup> <a name="SlidingInput" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.property.slidingInput"></a>

```csharp
public IResolvable|FeatureEngineeringFeatureTimeWindowSliding SlidingInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSliding">FeatureEngineeringFeatureTimeWindowSliding</a>

---

##### `TumblingInput`<sup>Optional</sup> <a name="TumblingInput" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.property.tumblingInput"></a>

```csharp
public IResolvable|FeatureEngineeringFeatureTimeWindowTumbling TumblingInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumbling">FeatureEngineeringFeatureTimeWindowTumbling</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FeatureEngineeringFeatureTimeWindow InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindow">FeatureEngineeringFeatureTimeWindow</a>

---


### FeatureEngineeringFeatureTimeWindowSlidingOutputReference <a name="FeatureEngineeringFeatureTimeWindowSlidingOutputReference" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new FeatureEngineeringFeatureTimeWindowSlidingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.property.slideDurationInput">SlideDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.property.windowDurationInput">WindowDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.property.slideDuration">SlideDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.property.windowDuration">WindowDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSliding">FeatureEngineeringFeatureTimeWindowSliding</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SlideDurationInput`<sup>Optional</sup> <a name="SlideDurationInput" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.property.slideDurationInput"></a>

```csharp
public string SlideDurationInput { get; }
```

- *Type:* string

---

##### `WindowDurationInput`<sup>Optional</sup> <a name="WindowDurationInput" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.property.windowDurationInput"></a>

```csharp
public string WindowDurationInput { get; }
```

- *Type:* string

---

##### `SlideDuration`<sup>Required</sup> <a name="SlideDuration" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.property.slideDuration"></a>

```csharp
public string SlideDuration { get; }
```

- *Type:* string

---

##### `WindowDuration`<sup>Required</sup> <a name="WindowDuration" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.property.windowDuration"></a>

```csharp
public string WindowDuration { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSlidingOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FeatureEngineeringFeatureTimeWindowSliding InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowSliding">FeatureEngineeringFeatureTimeWindowSliding</a>

---


### FeatureEngineeringFeatureTimeWindowTumblingOutputReference <a name="FeatureEngineeringFeatureTimeWindowTumblingOutputReference" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new FeatureEngineeringFeatureTimeWindowTumblingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.property.windowDurationInput">WindowDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.property.windowDuration">WindowDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumbling">FeatureEngineeringFeatureTimeWindowTumbling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WindowDurationInput`<sup>Optional</sup> <a name="WindowDurationInput" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.property.windowDurationInput"></a>

```csharp
public string WindowDurationInput { get; }
```

- *Type:* string

---

##### `WindowDuration`<sup>Required</sup> <a name="WindowDuration" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.property.windowDuration"></a>

```csharp
public string WindowDuration { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumblingOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FeatureEngineeringFeatureTimeWindowTumbling InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.featureEngineeringFeature.FeatureEngineeringFeatureTimeWindowTumbling">FeatureEngineeringFeatureTimeWindowTumbling</a>

---



