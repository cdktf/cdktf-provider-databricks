# `customAppIntegration` Submodule <a name="`customAppIntegration` Submodule" id="@cdktf/provider-databricks.customAppIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomAppIntegration <a name="CustomAppIntegration" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/custom_app_integration databricks_custom_app_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new CustomAppIntegration(Construct Scope, string Id, CustomAppIntegrationConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig">CustomAppIntegrationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig">CustomAppIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.putTokenAccessPolicy">PutTokenAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetConfidential">ResetConfidential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetCreatedBy">ResetCreatedBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetCreateTime">ResetCreateTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetCreatorUsername">ResetCreatorUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetIntegrationId">ResetIntegrationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetRedirectUrls">ResetRedirectUrls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetScopes">ResetScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetTokenAccessPolicy">ResetTokenAccessPolicy</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTokenAccessPolicy` <a name="PutTokenAccessPolicy" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.putTokenAccessPolicy"></a>

```csharp
private void PutTokenAccessPolicy(CustomAppIntegrationTokenAccessPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.putTokenAccessPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicy">CustomAppIntegrationTokenAccessPolicy</a>

---

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetClientSecret"></a>

```csharp
private void ResetClientSecret()
```

##### `ResetConfidential` <a name="ResetConfidential" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetConfidential"></a>

```csharp
private void ResetConfidential()
```

##### `ResetCreatedBy` <a name="ResetCreatedBy" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetCreatedBy"></a>

```csharp
private void ResetCreatedBy()
```

##### `ResetCreateTime` <a name="ResetCreateTime" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetCreateTime"></a>

```csharp
private void ResetCreateTime()
```

##### `ResetCreatorUsername` <a name="ResetCreatorUsername" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetCreatorUsername"></a>

```csharp
private void ResetCreatorUsername()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIntegrationId` <a name="ResetIntegrationId" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetIntegrationId"></a>

```csharp
private void ResetIntegrationId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetRedirectUrls` <a name="ResetRedirectUrls" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetRedirectUrls"></a>

```csharp
private void ResetRedirectUrls()
```

##### `ResetScopes` <a name="ResetScopes" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetScopes"></a>

```csharp
private void ResetScopes()
```

##### `ResetTokenAccessPolicy` <a name="ResetTokenAccessPolicy" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetTokenAccessPolicy"></a>

```csharp
private void ResetTokenAccessPolicy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CustomAppIntegration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

CustomAppIntegration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

CustomAppIntegration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

CustomAppIntegration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

CustomAppIntegration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CustomAppIntegration resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CustomAppIntegration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CustomAppIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/custom_app_integration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CustomAppIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.tokenAccessPolicy">TokenAccessPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference">CustomAppIntegrationTokenAccessPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.confidentialInput">ConfidentialInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.createdByInput">CreatedByInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.createTimeInput">CreateTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.creatorUsernameInput">CreatorUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.integrationIdInput">IntegrationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.redirectUrlsInput">RedirectUrlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.scopesInput">ScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.tokenAccessPolicyInput">TokenAccessPolicyInput</a></code> | <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicy">CustomAppIntegrationTokenAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.confidential">Confidential</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.createdBy">CreatedBy</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.creatorUsername">CreatorUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.integrationId">IntegrationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.redirectUrls">RedirectUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.scopes">Scopes</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `TokenAccessPolicy`<sup>Required</sup> <a name="TokenAccessPolicy" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.tokenAccessPolicy"></a>

```csharp
public CustomAppIntegrationTokenAccessPolicyOutputReference TokenAccessPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference">CustomAppIntegrationTokenAccessPolicyOutputReference</a>

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `ConfidentialInput`<sup>Optional</sup> <a name="ConfidentialInput" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.confidentialInput"></a>

```csharp
public object ConfidentialInput { get; }
```

- *Type:* object

---

##### `CreatedByInput`<sup>Optional</sup> <a name="CreatedByInput" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.createdByInput"></a>

```csharp
public double CreatedByInput { get; }
```

- *Type:* double

---

##### `CreateTimeInput`<sup>Optional</sup> <a name="CreateTimeInput" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.createTimeInput"></a>

```csharp
public string CreateTimeInput { get; }
```

- *Type:* string

---

##### `CreatorUsernameInput`<sup>Optional</sup> <a name="CreatorUsernameInput" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.creatorUsernameInput"></a>

```csharp
public string CreatorUsernameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IntegrationIdInput`<sup>Optional</sup> <a name="IntegrationIdInput" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.integrationIdInput"></a>

```csharp
public string IntegrationIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RedirectUrlsInput`<sup>Optional</sup> <a name="RedirectUrlsInput" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.redirectUrlsInput"></a>

```csharp
public string[] RedirectUrlsInput { get; }
```

- *Type:* string[]

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.scopesInput"></a>

```csharp
public string[] ScopesInput { get; }
```

- *Type:* string[]

---

##### `TokenAccessPolicyInput`<sup>Optional</sup> <a name="TokenAccessPolicyInput" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.tokenAccessPolicyInput"></a>

```csharp
public CustomAppIntegrationTokenAccessPolicy TokenAccessPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicy">CustomAppIntegrationTokenAccessPolicy</a>

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `Confidential`<sup>Required</sup> <a name="Confidential" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.confidential"></a>

```csharp
public object Confidential { get; }
```

- *Type:* object

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.createdBy"></a>

```csharp
public double CreatedBy { get; }
```

- *Type:* double

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `CreatorUsername`<sup>Required</sup> <a name="CreatorUsername" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.creatorUsername"></a>

```csharp
public string CreatorUsername { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IntegrationId`<sup>Required</sup> <a name="IntegrationId" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.integrationId"></a>

```csharp
public string IntegrationId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RedirectUrls`<sup>Required</sup> <a name="RedirectUrls" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.redirectUrls"></a>

```csharp
public string[] RedirectUrls { get; }
```

- *Type:* string[]

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.scopes"></a>

```csharp
public string[] Scopes { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CustomAppIntegrationConfig <a name="CustomAppIntegrationConfig" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new CustomAppIntegrationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClientId = null,
    string ClientSecret = null,
    object Confidential = null,
    double CreatedBy = null,
    string CreateTime = null,
    string CreatorUsername = null,
    string Id = null,
    string IntegrationId = null,
    string Name = null,
    string[] RedirectUrls = null,
    string[] Scopes = null,
    CustomAppIntegrationTokenAccessPolicy TokenAccessPolicy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.clientId">ClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/custom_app_integration#client_id CustomAppIntegration#client_id}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.clientSecret">ClientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/custom_app_integration#client_secret CustomAppIntegration#client_secret}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.confidential">Confidential</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/custom_app_integration#confidential CustomAppIntegration#confidential}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.createdBy">CreatedBy</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/custom_app_integration#created_by CustomAppIntegration#created_by}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.createTime">CreateTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/custom_app_integration#create_time CustomAppIntegration#create_time}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.creatorUsername">CreatorUsername</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/custom_app_integration#creator_username CustomAppIntegration#creator_username}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/custom_app_integration#id CustomAppIntegration#id}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.integrationId">IntegrationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/custom_app_integration#integration_id CustomAppIntegration#integration_id}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/custom_app_integration#name CustomAppIntegration#name}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.redirectUrls">RedirectUrls</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/custom_app_integration#redirect_urls CustomAppIntegration#redirect_urls}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.scopes">Scopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/custom_app_integration#scopes CustomAppIntegration#scopes}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.tokenAccessPolicy">TokenAccessPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicy">CustomAppIntegrationTokenAccessPolicy</a></code> | token_access_policy block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/custom_app_integration#client_id CustomAppIntegration#client_id}.

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/custom_app_integration#client_secret CustomAppIntegration#client_secret}.

---

##### `Confidential`<sup>Optional</sup> <a name="Confidential" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.confidential"></a>

```csharp
public object Confidential { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/custom_app_integration#confidential CustomAppIntegration#confidential}.

---

##### `CreatedBy`<sup>Optional</sup> <a name="CreatedBy" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.createdBy"></a>

```csharp
public double CreatedBy { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/custom_app_integration#created_by CustomAppIntegration#created_by}.

---

##### `CreateTime`<sup>Optional</sup> <a name="CreateTime" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.createTime"></a>

```csharp
public string CreateTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/custom_app_integration#create_time CustomAppIntegration#create_time}.

---

##### `CreatorUsername`<sup>Optional</sup> <a name="CreatorUsername" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.creatorUsername"></a>

```csharp
public string CreatorUsername { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/custom_app_integration#creator_username CustomAppIntegration#creator_username}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/custom_app_integration#id CustomAppIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IntegrationId`<sup>Optional</sup> <a name="IntegrationId" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.integrationId"></a>

```csharp
public string IntegrationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/custom_app_integration#integration_id CustomAppIntegration#integration_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/custom_app_integration#name CustomAppIntegration#name}.

---

##### `RedirectUrls`<sup>Optional</sup> <a name="RedirectUrls" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.redirectUrls"></a>

```csharp
public string[] RedirectUrls { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/custom_app_integration#redirect_urls CustomAppIntegration#redirect_urls}.

---

##### `Scopes`<sup>Optional</sup> <a name="Scopes" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.scopes"></a>

```csharp
public string[] Scopes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/custom_app_integration#scopes CustomAppIntegration#scopes}.

---

##### `TokenAccessPolicy`<sup>Optional</sup> <a name="TokenAccessPolicy" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.tokenAccessPolicy"></a>

```csharp
public CustomAppIntegrationTokenAccessPolicy TokenAccessPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicy">CustomAppIntegrationTokenAccessPolicy</a>

token_access_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/custom_app_integration#token_access_policy CustomAppIntegration#token_access_policy}

---

### CustomAppIntegrationTokenAccessPolicy <a name="CustomAppIntegrationTokenAccessPolicy" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new CustomAppIntegrationTokenAccessPolicy {
    double AccessTokenTtlInMinutes = null,
    double RefreshTokenTtlInMinutes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicy.property.accessTokenTtlInMinutes">AccessTokenTtlInMinutes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/custom_app_integration#access_token_ttl_in_minutes CustomAppIntegration#access_token_ttl_in_minutes}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicy.property.refreshTokenTtlInMinutes">RefreshTokenTtlInMinutes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/custom_app_integration#refresh_token_ttl_in_minutes CustomAppIntegration#refresh_token_ttl_in_minutes}. |

---

##### `AccessTokenTtlInMinutes`<sup>Optional</sup> <a name="AccessTokenTtlInMinutes" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicy.property.accessTokenTtlInMinutes"></a>

```csharp
public double AccessTokenTtlInMinutes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/custom_app_integration#access_token_ttl_in_minutes CustomAppIntegration#access_token_ttl_in_minutes}.

---

##### `RefreshTokenTtlInMinutes`<sup>Optional</sup> <a name="RefreshTokenTtlInMinutes" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicy.property.refreshTokenTtlInMinutes"></a>

```csharp
public double RefreshTokenTtlInMinutes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.55.0/docs/resources/custom_app_integration#refresh_token_ttl_in_minutes CustomAppIntegration#refresh_token_ttl_in_minutes}.

---

## Classes <a name="Classes" id="Classes"></a>

### CustomAppIntegrationTokenAccessPolicyOutputReference <a name="CustomAppIntegrationTokenAccessPolicyOutputReference" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new CustomAppIntegrationTokenAccessPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.resetAccessTokenTtlInMinutes">ResetAccessTokenTtlInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.resetRefreshTokenTtlInMinutes">ResetRefreshTokenTtlInMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessTokenTtlInMinutes` <a name="ResetAccessTokenTtlInMinutes" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.resetAccessTokenTtlInMinutes"></a>

```csharp
private void ResetAccessTokenTtlInMinutes()
```

##### `ResetRefreshTokenTtlInMinutes` <a name="ResetRefreshTokenTtlInMinutes" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.resetRefreshTokenTtlInMinutes"></a>

```csharp
private void ResetRefreshTokenTtlInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.accessTokenTtlInMinutesInput">AccessTokenTtlInMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.refreshTokenTtlInMinutesInput">RefreshTokenTtlInMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.accessTokenTtlInMinutes">AccessTokenTtlInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.refreshTokenTtlInMinutes">RefreshTokenTtlInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicy">CustomAppIntegrationTokenAccessPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessTokenTtlInMinutesInput`<sup>Optional</sup> <a name="AccessTokenTtlInMinutesInput" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.accessTokenTtlInMinutesInput"></a>

```csharp
public double AccessTokenTtlInMinutesInput { get; }
```

- *Type:* double

---

##### `RefreshTokenTtlInMinutesInput`<sup>Optional</sup> <a name="RefreshTokenTtlInMinutesInput" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.refreshTokenTtlInMinutesInput"></a>

```csharp
public double RefreshTokenTtlInMinutesInput { get; }
```

- *Type:* double

---

##### `AccessTokenTtlInMinutes`<sup>Required</sup> <a name="AccessTokenTtlInMinutes" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.accessTokenTtlInMinutes"></a>

```csharp
public double AccessTokenTtlInMinutes { get; }
```

- *Type:* double

---

##### `RefreshTokenTtlInMinutes`<sup>Required</sup> <a name="RefreshTokenTtlInMinutes" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.refreshTokenTtlInMinutes"></a>

```csharp
public double RefreshTokenTtlInMinutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.internalValue"></a>

```csharp
public CustomAppIntegrationTokenAccessPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicy">CustomAppIntegrationTokenAccessPolicy</a>

---



