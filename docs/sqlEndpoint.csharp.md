# `sqlEndpoint` Submodule <a name="`sqlEndpoint` Submodule" id="@cdktf/provider-databricks.sqlEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqlEndpoint <a name="SqlEndpoint" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/sql_endpoint databricks_sql_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlEndpoint(Construct Scope, string Id, SqlEndpointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig">SqlEndpointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig">SqlEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.putChannel">PutChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetAutoStopMins">ResetAutoStopMins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetChannel">ResetChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetDataSourceId">ResetDataSourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetEnablePhoton">ResetEnablePhoton</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetEnableServerlessCompute">ResetEnableServerlessCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetInstanceProfileArn">ResetInstanceProfileArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetMaxNumClusters">ResetMaxNumClusters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetMinNumClusters">ResetMinNumClusters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetSpotInstancePolicy">ResetSpotInstancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetWarehouseType">ResetWarehouseType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutChannel` <a name="PutChannel" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.putChannel"></a>

```csharp
private void PutChannel(SqlEndpointChannel Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.putChannel.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannel">SqlEndpointChannel</a>

---

##### `PutTags` <a name="PutTags" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.putTags"></a>

```csharp
private void PutTags(SqlEndpointTags Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.putTags.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTags">SqlEndpointTags</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.putTimeouts"></a>

```csharp
private void PutTimeouts(SqlEndpointTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeouts">SqlEndpointTimeouts</a>

---

##### `ResetAutoStopMins` <a name="ResetAutoStopMins" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetAutoStopMins"></a>

```csharp
private void ResetAutoStopMins()
```

##### `ResetChannel` <a name="ResetChannel" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetChannel"></a>

```csharp
private void ResetChannel()
```

##### `ResetDataSourceId` <a name="ResetDataSourceId" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetDataSourceId"></a>

```csharp
private void ResetDataSourceId()
```

##### `ResetEnablePhoton` <a name="ResetEnablePhoton" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetEnablePhoton"></a>

```csharp
private void ResetEnablePhoton()
```

##### `ResetEnableServerlessCompute` <a name="ResetEnableServerlessCompute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetEnableServerlessCompute"></a>

```csharp
private void ResetEnableServerlessCompute()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInstanceProfileArn` <a name="ResetInstanceProfileArn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetInstanceProfileArn"></a>

```csharp
private void ResetInstanceProfileArn()
```

##### `ResetMaxNumClusters` <a name="ResetMaxNumClusters" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetMaxNumClusters"></a>

```csharp
private void ResetMaxNumClusters()
```

##### `ResetMinNumClusters` <a name="ResetMinNumClusters" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetMinNumClusters"></a>

```csharp
private void ResetMinNumClusters()
```

##### `ResetSpotInstancePolicy` <a name="ResetSpotInstancePolicy" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetSpotInstancePolicy"></a>

```csharp
private void ResetSpotInstancePolicy()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWarehouseType` <a name="ResetWarehouseType" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.resetWarehouseType"></a>

```csharp
private void ResetWarehouseType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SqlEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

SqlEndpoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

SqlEndpoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

SqlEndpoint.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

SqlEndpoint.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SqlEndpoint resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SqlEndpoint to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SqlEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/sql_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SqlEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.channel">Channel</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference">SqlEndpointChannelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.creatorName">CreatorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.health">Health</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList">SqlEndpointHealthList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.jdbcUrl">JdbcUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.numActiveSessions">NumActiveSessions</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.numClusters">NumClusters</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.odbcParams">OdbcParams</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList">SqlEndpointOdbcParamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.tags">Tags</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference">SqlEndpointTagsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference">SqlEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.autoStopMinsInput">AutoStopMinsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.channelInput">ChannelInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannel">SqlEndpointChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.clusterSizeInput">ClusterSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.dataSourceIdInput">DataSourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.enablePhotonInput">EnablePhotonInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.enableServerlessComputeInput">EnableServerlessComputeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.instanceProfileArnInput">InstanceProfileArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.maxNumClustersInput">MaxNumClustersInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.minNumClustersInput">MinNumClustersInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.spotInstancePolicyInput">SpotInstancePolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.tagsInput">TagsInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTags">SqlEndpointTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.warehouseTypeInput">WarehouseTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.autoStopMins">AutoStopMins</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.clusterSize">ClusterSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.dataSourceId">DataSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.enablePhoton">EnablePhoton</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.enableServerlessCompute">EnableServerlessCompute</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.instanceProfileArn">InstanceProfileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.maxNumClusters">MaxNumClusters</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.minNumClusters">MinNumClusters</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.spotInstancePolicy">SpotInstancePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.warehouseType">WarehouseType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Channel`<sup>Required</sup> <a name="Channel" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.channel"></a>

```csharp
public SqlEndpointChannelOutputReference Channel { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference">SqlEndpointChannelOutputReference</a>

---

##### `CreatorName`<sup>Required</sup> <a name="CreatorName" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.creatorName"></a>

```csharp
public string CreatorName { get; }
```

- *Type:* string

---

##### `Health`<sup>Required</sup> <a name="Health" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.health"></a>

```csharp
public SqlEndpointHealthList Health { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList">SqlEndpointHealthList</a>

---

##### `JdbcUrl`<sup>Required</sup> <a name="JdbcUrl" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.jdbcUrl"></a>

```csharp
public string JdbcUrl { get; }
```

- *Type:* string

---

##### `NumActiveSessions`<sup>Required</sup> <a name="NumActiveSessions" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.numActiveSessions"></a>

```csharp
public double NumActiveSessions { get; }
```

- *Type:* double

---

##### `NumClusters`<sup>Required</sup> <a name="NumClusters" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.numClusters"></a>

```csharp
public double NumClusters { get; }
```

- *Type:* double

---

##### `OdbcParams`<sup>Required</sup> <a name="OdbcParams" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.odbcParams"></a>

```csharp
public SqlEndpointOdbcParamsList OdbcParams { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList">SqlEndpointOdbcParamsList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.tags"></a>

```csharp
public SqlEndpointTagsOutputReference Tags { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference">SqlEndpointTagsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.timeouts"></a>

```csharp
public SqlEndpointTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference">SqlEndpointTimeoutsOutputReference</a>

---

##### `AutoStopMinsInput`<sup>Optional</sup> <a name="AutoStopMinsInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.autoStopMinsInput"></a>

```csharp
public double AutoStopMinsInput { get; }
```

- *Type:* double

---

##### `ChannelInput`<sup>Optional</sup> <a name="ChannelInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.channelInput"></a>

```csharp
public SqlEndpointChannel ChannelInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannel">SqlEndpointChannel</a>

---

##### `ClusterSizeInput`<sup>Optional</sup> <a name="ClusterSizeInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.clusterSizeInput"></a>

```csharp
public string ClusterSizeInput { get; }
```

- *Type:* string

---

##### `DataSourceIdInput`<sup>Optional</sup> <a name="DataSourceIdInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.dataSourceIdInput"></a>

```csharp
public string DataSourceIdInput { get; }
```

- *Type:* string

---

##### `EnablePhotonInput`<sup>Optional</sup> <a name="EnablePhotonInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.enablePhotonInput"></a>

```csharp
public object EnablePhotonInput { get; }
```

- *Type:* object

---

##### `EnableServerlessComputeInput`<sup>Optional</sup> <a name="EnableServerlessComputeInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.enableServerlessComputeInput"></a>

```csharp
public object EnableServerlessComputeInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceProfileArnInput`<sup>Optional</sup> <a name="InstanceProfileArnInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.instanceProfileArnInput"></a>

```csharp
public string InstanceProfileArnInput { get; }
```

- *Type:* string

---

##### `MaxNumClustersInput`<sup>Optional</sup> <a name="MaxNumClustersInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.maxNumClustersInput"></a>

```csharp
public double MaxNumClustersInput { get; }
```

- *Type:* double

---

##### `MinNumClustersInput`<sup>Optional</sup> <a name="MinNumClustersInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.minNumClustersInput"></a>

```csharp
public double MinNumClustersInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SpotInstancePolicyInput`<sup>Optional</sup> <a name="SpotInstancePolicyInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.spotInstancePolicyInput"></a>

```csharp
public string SpotInstancePolicyInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.tagsInput"></a>

```csharp
public SqlEndpointTags TagsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTags">SqlEndpointTags</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `WarehouseTypeInput`<sup>Optional</sup> <a name="WarehouseTypeInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.warehouseTypeInput"></a>

```csharp
public string WarehouseTypeInput { get; }
```

- *Type:* string

---

##### `AutoStopMins`<sup>Required</sup> <a name="AutoStopMins" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.autoStopMins"></a>

```csharp
public double AutoStopMins { get; }
```

- *Type:* double

---

##### `ClusterSize`<sup>Required</sup> <a name="ClusterSize" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.clusterSize"></a>

```csharp
public string ClusterSize { get; }
```

- *Type:* string

---

##### `DataSourceId`<sup>Required</sup> <a name="DataSourceId" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.dataSourceId"></a>

```csharp
public string DataSourceId { get; }
```

- *Type:* string

---

##### `EnablePhoton`<sup>Required</sup> <a name="EnablePhoton" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.enablePhoton"></a>

```csharp
public object EnablePhoton { get; }
```

- *Type:* object

---

##### `EnableServerlessCompute`<sup>Required</sup> <a name="EnableServerlessCompute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.enableServerlessCompute"></a>

```csharp
public object EnableServerlessCompute { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceProfileArn`<sup>Required</sup> <a name="InstanceProfileArn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.instanceProfileArn"></a>

```csharp
public string InstanceProfileArn { get; }
```

- *Type:* string

---

##### `MaxNumClusters`<sup>Required</sup> <a name="MaxNumClusters" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.maxNumClusters"></a>

```csharp
public double MaxNumClusters { get; }
```

- *Type:* double

---

##### `MinNumClusters`<sup>Required</sup> <a name="MinNumClusters" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.minNumClusters"></a>

```csharp
public double MinNumClusters { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SpotInstancePolicy`<sup>Required</sup> <a name="SpotInstancePolicy" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.spotInstancePolicy"></a>

```csharp
public string SpotInstancePolicy { get; }
```

- *Type:* string

---

##### `WarehouseType`<sup>Required</sup> <a name="WarehouseType" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.warehouseType"></a>

```csharp
public string WarehouseType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SqlEndpointChannel <a name="SqlEndpointChannel" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannel.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlEndpointChannel {
    string DbsqlVersion = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannel.property.dbsqlVersion">DbsqlVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/sql_endpoint#dbsql_version SqlEndpoint#dbsql_version}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannel.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/sql_endpoint#name SqlEndpoint#name}. |

---

##### `DbsqlVersion`<sup>Optional</sup> <a name="DbsqlVersion" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannel.property.dbsqlVersion"></a>

```csharp
public string DbsqlVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/sql_endpoint#dbsql_version SqlEndpoint#dbsql_version}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannel.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/sql_endpoint#name SqlEndpoint#name}.

---

### SqlEndpointConfig <a name="SqlEndpointConfig" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlEndpointConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClusterSize,
    string Name,
    double AutoStopMins = null,
    SqlEndpointChannel Channel = null,
    string DataSourceId = null,
    object EnablePhoton = null,
    object EnableServerlessCompute = null,
    string Id = null,
    string InstanceProfileArn = null,
    double MaxNumClusters = null,
    double MinNumClusters = null,
    string SpotInstancePolicy = null,
    SqlEndpointTags Tags = null,
    SqlEndpointTimeouts Timeouts = null,
    string WarehouseType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.clusterSize">ClusterSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/sql_endpoint#cluster_size SqlEndpoint#cluster_size}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/sql_endpoint#name SqlEndpoint#name}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.autoStopMins">AutoStopMins</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/sql_endpoint#auto_stop_mins SqlEndpoint#auto_stop_mins}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.channel">Channel</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannel">SqlEndpointChannel</a></code> | channel block. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.dataSourceId">DataSourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/sql_endpoint#data_source_id SqlEndpoint#data_source_id}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.enablePhoton">EnablePhoton</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/sql_endpoint#enable_photon SqlEndpoint#enable_photon}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.enableServerlessCompute">EnableServerlessCompute</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/sql_endpoint#enable_serverless_compute SqlEndpoint#enable_serverless_compute}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/sql_endpoint#id SqlEndpoint#id}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.instanceProfileArn">InstanceProfileArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/sql_endpoint#instance_profile_arn SqlEndpoint#instance_profile_arn}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.maxNumClusters">MaxNumClusters</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/sql_endpoint#max_num_clusters SqlEndpoint#max_num_clusters}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.minNumClusters">MinNumClusters</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/sql_endpoint#min_num_clusters SqlEndpoint#min_num_clusters}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.spotInstancePolicy">SpotInstancePolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/sql_endpoint#spot_instance_policy SqlEndpoint#spot_instance_policy}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.tags">Tags</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTags">SqlEndpointTags</a></code> | tags block. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeouts">SqlEndpointTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.warehouseType">WarehouseType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/sql_endpoint#warehouse_type SqlEndpoint#warehouse_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClusterSize`<sup>Required</sup> <a name="ClusterSize" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.clusterSize"></a>

```csharp
public string ClusterSize { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/sql_endpoint#cluster_size SqlEndpoint#cluster_size}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/sql_endpoint#name SqlEndpoint#name}.

---

##### `AutoStopMins`<sup>Optional</sup> <a name="AutoStopMins" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.autoStopMins"></a>

```csharp
public double AutoStopMins { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/sql_endpoint#auto_stop_mins SqlEndpoint#auto_stop_mins}.

---

##### `Channel`<sup>Optional</sup> <a name="Channel" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.channel"></a>

```csharp
public SqlEndpointChannel Channel { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannel">SqlEndpointChannel</a>

channel block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/sql_endpoint#channel SqlEndpoint#channel}

---

##### `DataSourceId`<sup>Optional</sup> <a name="DataSourceId" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.dataSourceId"></a>

```csharp
public string DataSourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/sql_endpoint#data_source_id SqlEndpoint#data_source_id}.

---

##### `EnablePhoton`<sup>Optional</sup> <a name="EnablePhoton" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.enablePhoton"></a>

```csharp
public object EnablePhoton { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/sql_endpoint#enable_photon SqlEndpoint#enable_photon}.

---

##### `EnableServerlessCompute`<sup>Optional</sup> <a name="EnableServerlessCompute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.enableServerlessCompute"></a>

```csharp
public object EnableServerlessCompute { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/sql_endpoint#enable_serverless_compute SqlEndpoint#enable_serverless_compute}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/sql_endpoint#id SqlEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceProfileArn`<sup>Optional</sup> <a name="InstanceProfileArn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.instanceProfileArn"></a>

```csharp
public string InstanceProfileArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/sql_endpoint#instance_profile_arn SqlEndpoint#instance_profile_arn}.

---

##### `MaxNumClusters`<sup>Optional</sup> <a name="MaxNumClusters" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.maxNumClusters"></a>

```csharp
public double MaxNumClusters { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/sql_endpoint#max_num_clusters SqlEndpoint#max_num_clusters}.

---

##### `MinNumClusters`<sup>Optional</sup> <a name="MinNumClusters" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.minNumClusters"></a>

```csharp
public double MinNumClusters { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/sql_endpoint#min_num_clusters SqlEndpoint#min_num_clusters}.

---

##### `SpotInstancePolicy`<sup>Optional</sup> <a name="SpotInstancePolicy" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.spotInstancePolicy"></a>

```csharp
public string SpotInstancePolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/sql_endpoint#spot_instance_policy SqlEndpoint#spot_instance_policy}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.tags"></a>

```csharp
public SqlEndpointTags Tags { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTags">SqlEndpointTags</a>

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/sql_endpoint#tags SqlEndpoint#tags}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.timeouts"></a>

```csharp
public SqlEndpointTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeouts">SqlEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/sql_endpoint#timeouts SqlEndpoint#timeouts}

---

##### `WarehouseType`<sup>Optional</sup> <a name="WarehouseType" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointConfig.property.warehouseType"></a>

```csharp
public string WarehouseType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/sql_endpoint#warehouse_type SqlEndpoint#warehouse_type}.

---

### SqlEndpointHealth <a name="SqlEndpointHealth" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealth.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlEndpointHealth {

};
```


### SqlEndpointHealthFailureReason <a name="SqlEndpointHealthFailureReason" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReason"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReason.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlEndpointHealthFailureReason {

};
```


### SqlEndpointOdbcParams <a name="SqlEndpointOdbcParams" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParams.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlEndpointOdbcParams {

};
```


### SqlEndpointTags <a name="SqlEndpointTags" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlEndpointTags {
    object CustomTags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTags.property.customTags">CustomTags</a></code> | <code>object</code> | custom_tags block. |

---

##### `CustomTags`<sup>Optional</sup> <a name="CustomTags" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTags.property.customTags"></a>

```csharp
public object CustomTags { get; set; }
```

- *Type:* object

custom_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/sql_endpoint#custom_tags SqlEndpoint#custom_tags}

---

### SqlEndpointTagsCustomTags <a name="SqlEndpointTagsCustomTags" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlEndpointTagsCustomTags {
    string Key,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/sql_endpoint#key SqlEndpoint#key}. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/sql_endpoint#value SqlEndpoint#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/sql_endpoint#key SqlEndpoint#key}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/sql_endpoint#value SqlEndpoint#value}.

---

### SqlEndpointTimeouts <a name="SqlEndpointTimeouts" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlEndpointTimeouts {
    string Create = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/sql_endpoint#create SqlEndpoint#create}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.0/docs/resources/sql_endpoint#create SqlEndpoint#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### SqlEndpointChannelOutputReference <a name="SqlEndpointChannelOutputReference" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlEndpointChannelOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.resetDbsqlVersion">ResetDbsqlVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDbsqlVersion` <a name="ResetDbsqlVersion" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.resetDbsqlVersion"></a>

```csharp
private void ResetDbsqlVersion()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.property.dbsqlVersionInput">DbsqlVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.property.dbsqlVersion">DbsqlVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannel">SqlEndpointChannel</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DbsqlVersionInput`<sup>Optional</sup> <a name="DbsqlVersionInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.property.dbsqlVersionInput"></a>

```csharp
public string DbsqlVersionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `DbsqlVersion`<sup>Required</sup> <a name="DbsqlVersion" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.property.dbsqlVersion"></a>

```csharp
public string DbsqlVersion { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannelOutputReference.property.internalValue"></a>

```csharp
public SqlEndpointChannel InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointChannel">SqlEndpointChannel</a>

---


### SqlEndpointHealthFailureReasonList <a name="SqlEndpointHealthFailureReasonList" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlEndpointHealthFailureReasonList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.get"></a>

```csharp
private SqlEndpointHealthFailureReasonOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### SqlEndpointHealthFailureReasonOutputReference <a name="SqlEndpointHealthFailureReasonOutputReference" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlEndpointHealthFailureReasonOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.property.code">Code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.property.parameters">Parameters</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReason">SqlEndpointHealthFailureReason</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.property.code"></a>

```csharp
public string Code { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.property.parameters"></a>

```csharp
public StringMap Parameters { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonOutputReference.property.internalValue"></a>

```csharp
public SqlEndpointHealthFailureReason InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReason">SqlEndpointHealthFailureReason</a>

---


### SqlEndpointHealthList <a name="SqlEndpointHealthList" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlEndpointHealthList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.get"></a>

```csharp
private SqlEndpointHealthOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### SqlEndpointHealthOutputReference <a name="SqlEndpointHealthOutputReference" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlEndpointHealthOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.property.details">Details</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.property.failureReason">FailureReason</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList">SqlEndpointHealthFailureReasonList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.property.summary">Summary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealth">SqlEndpointHealth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.property.details"></a>

```csharp
public string Details { get; }
```

- *Type:* string

---

##### `FailureReason`<sup>Required</sup> <a name="FailureReason" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.property.failureReason"></a>

```csharp
public SqlEndpointHealthFailureReasonList FailureReason { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthFailureReasonList">SqlEndpointHealthFailureReasonList</a>

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Summary`<sup>Required</sup> <a name="Summary" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.property.summary"></a>

```csharp
public string Summary { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealthOutputReference.property.internalValue"></a>

```csharp
public SqlEndpointHealth InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointHealth">SqlEndpointHealth</a>

---


### SqlEndpointOdbcParamsList <a name="SqlEndpointOdbcParamsList" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlEndpointOdbcParamsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.get"></a>

```csharp
private SqlEndpointOdbcParamsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### SqlEndpointOdbcParamsOutputReference <a name="SqlEndpointOdbcParamsOutputReference" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlEndpointOdbcParamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParams">SqlEndpointOdbcParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParamsOutputReference.property.internalValue"></a>

```csharp
public SqlEndpointOdbcParams InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointOdbcParams">SqlEndpointOdbcParams</a>

---


### SqlEndpointTagsCustomTagsList <a name="SqlEndpointTagsCustomTagsList" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlEndpointTagsCustomTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.get"></a>

```csharp
private SqlEndpointTagsCustomTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SqlEndpointTagsCustomTagsOutputReference <a name="SqlEndpointTagsCustomTagsOutputReference" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlEndpointTagsCustomTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SqlEndpointTagsOutputReference <a name="SqlEndpointTagsOutputReference" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlEndpointTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.putCustomTags">PutCustomTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.resetCustomTags">ResetCustomTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomTags` <a name="PutCustomTags" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.putCustomTags"></a>

```csharp
private void PutCustomTags(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.putCustomTags.parameter.value"></a>

- *Type:* object

---

##### `ResetCustomTags` <a name="ResetCustomTags" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.resetCustomTags"></a>

```csharp
private void ResetCustomTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.property.customTags">CustomTags</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList">SqlEndpointTagsCustomTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.property.customTagsInput">CustomTagsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTags">SqlEndpointTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomTags`<sup>Required</sup> <a name="CustomTags" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.property.customTags"></a>

```csharp
public SqlEndpointTagsCustomTagsList CustomTags { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsCustomTagsList">SqlEndpointTagsCustomTagsList</a>

---

##### `CustomTagsInput`<sup>Optional</sup> <a name="CustomTagsInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.property.customTagsInput"></a>

```csharp
public object CustomTagsInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTagsOutputReference.property.internalValue"></a>

```csharp
public SqlEndpointTags InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTags">SqlEndpointTags</a>

---


### SqlEndpointTimeoutsOutputReference <a name="SqlEndpointTimeoutsOutputReference" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlEndpointTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.sqlEndpoint.SqlEndpointTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



