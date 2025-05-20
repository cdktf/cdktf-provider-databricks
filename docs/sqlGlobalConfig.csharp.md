# `sqlGlobalConfig` Submodule <a name="`sqlGlobalConfig` Submodule" id="@cdktf/provider-databricks.sqlGlobalConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqlGlobalConfig <a name="SqlGlobalConfig" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/sql_global_config databricks_sql_global_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlGlobalConfig(Construct Scope, string Id, SqlGlobalConfigConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig">SqlGlobalConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig">SqlGlobalConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.resetDataAccessConfig">ResetDataAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.resetEnableServerlessCompute">ResetEnableServerlessCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.resetGoogleServiceAccount">ResetGoogleServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.resetInstanceProfileArn">ResetInstanceProfileArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.resetSecurityPolicy">ResetSecurityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.resetSqlConfigParams">ResetSqlConfigParams</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDataAccessConfig` <a name="ResetDataAccessConfig" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.resetDataAccessConfig"></a>

```csharp
private void ResetDataAccessConfig()
```

##### `ResetEnableServerlessCompute` <a name="ResetEnableServerlessCompute" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.resetEnableServerlessCompute"></a>

```csharp
private void ResetEnableServerlessCompute()
```

##### `ResetGoogleServiceAccount` <a name="ResetGoogleServiceAccount" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.resetGoogleServiceAccount"></a>

```csharp
private void ResetGoogleServiceAccount()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInstanceProfileArn` <a name="ResetInstanceProfileArn" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.resetInstanceProfileArn"></a>

```csharp
private void ResetInstanceProfileArn()
```

##### `ResetSecurityPolicy` <a name="ResetSecurityPolicy" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.resetSecurityPolicy"></a>

```csharp
private void ResetSecurityPolicy()
```

##### `ResetSqlConfigParams` <a name="ResetSqlConfigParams" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.resetSqlConfigParams"></a>

```csharp
private void ResetSqlConfigParams()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SqlGlobalConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

SqlGlobalConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

SqlGlobalConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

SqlGlobalConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

SqlGlobalConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SqlGlobalConfig resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SqlGlobalConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SqlGlobalConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/sql_global_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SqlGlobalConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.dataAccessConfigInput">DataAccessConfigInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.enableServerlessComputeInput">EnableServerlessComputeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.googleServiceAccountInput">GoogleServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.instanceProfileArnInput">InstanceProfileArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.securityPolicyInput">SecurityPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.sqlConfigParamsInput">SqlConfigParamsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.dataAccessConfig">DataAccessConfig</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.enableServerlessCompute">EnableServerlessCompute</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.googleServiceAccount">GoogleServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.instanceProfileArn">InstanceProfileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.securityPolicy">SecurityPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.sqlConfigParams">SqlConfigParams</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DataAccessConfigInput`<sup>Optional</sup> <a name="DataAccessConfigInput" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.dataAccessConfigInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DataAccessConfigInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `EnableServerlessComputeInput`<sup>Optional</sup> <a name="EnableServerlessComputeInput" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.enableServerlessComputeInput"></a>

```csharp
public object EnableServerlessComputeInput { get; }
```

- *Type:* object

---

##### `GoogleServiceAccountInput`<sup>Optional</sup> <a name="GoogleServiceAccountInput" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.googleServiceAccountInput"></a>

```csharp
public string GoogleServiceAccountInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceProfileArnInput`<sup>Optional</sup> <a name="InstanceProfileArnInput" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.instanceProfileArnInput"></a>

```csharp
public string InstanceProfileArnInput { get; }
```

- *Type:* string

---

##### `SecurityPolicyInput`<sup>Optional</sup> <a name="SecurityPolicyInput" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.securityPolicyInput"></a>

```csharp
public string SecurityPolicyInput { get; }
```

- *Type:* string

---

##### `SqlConfigParamsInput`<sup>Optional</sup> <a name="SqlConfigParamsInput" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.sqlConfigParamsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SqlConfigParamsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DataAccessConfig`<sup>Required</sup> <a name="DataAccessConfig" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.dataAccessConfig"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DataAccessConfig { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `EnableServerlessCompute`<sup>Required</sup> <a name="EnableServerlessCompute" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.enableServerlessCompute"></a>

```csharp
public object EnableServerlessCompute { get; }
```

- *Type:* object

---

##### `GoogleServiceAccount`<sup>Required</sup> <a name="GoogleServiceAccount" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.googleServiceAccount"></a>

```csharp
public string GoogleServiceAccount { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceProfileArn`<sup>Required</sup> <a name="InstanceProfileArn" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.instanceProfileArn"></a>

```csharp
public string InstanceProfileArn { get; }
```

- *Type:* string

---

##### `SecurityPolicy`<sup>Required</sup> <a name="SecurityPolicy" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.securityPolicy"></a>

```csharp
public string SecurityPolicy { get; }
```

- *Type:* string

---

##### `SqlConfigParams`<sup>Required</sup> <a name="SqlConfigParams" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.sqlConfigParams"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SqlConfigParams { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SqlGlobalConfigConfig <a name="SqlGlobalConfigConfig" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlGlobalConfigConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    System.Collections.Generic.IDictionary<string, string> DataAccessConfig = null,
    object EnableServerlessCompute = null,
    string GoogleServiceAccount = null,
    string Id = null,
    string InstanceProfileArn = null,
    string SecurityPolicy = null,
    System.Collections.Generic.IDictionary<string, string> SqlConfigParams = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.dataAccessConfig">DataAccessConfig</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/sql_global_config#data_access_config SqlGlobalConfig#data_access_config}. |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.enableServerlessCompute">EnableServerlessCompute</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/sql_global_config#enable_serverless_compute SqlGlobalConfig#enable_serverless_compute}. |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.googleServiceAccount">GoogleServiceAccount</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/sql_global_config#google_service_account SqlGlobalConfig#google_service_account}. |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/sql_global_config#id SqlGlobalConfig#id}. |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.instanceProfileArn">InstanceProfileArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/sql_global_config#instance_profile_arn SqlGlobalConfig#instance_profile_arn}. |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.securityPolicy">SecurityPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/sql_global_config#security_policy SqlGlobalConfig#security_policy}. |
| <code><a href="#@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.sqlConfigParams">SqlConfigParams</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/sql_global_config#sql_config_params SqlGlobalConfig#sql_config_params}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DataAccessConfig`<sup>Optional</sup> <a name="DataAccessConfig" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.dataAccessConfig"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DataAccessConfig { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/sql_global_config#data_access_config SqlGlobalConfig#data_access_config}.

---

##### `EnableServerlessCompute`<sup>Optional</sup> <a name="EnableServerlessCompute" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.enableServerlessCompute"></a>

```csharp
public object EnableServerlessCompute { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/sql_global_config#enable_serverless_compute SqlGlobalConfig#enable_serverless_compute}.

---

##### `GoogleServiceAccount`<sup>Optional</sup> <a name="GoogleServiceAccount" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.googleServiceAccount"></a>

```csharp
public string GoogleServiceAccount { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/sql_global_config#google_service_account SqlGlobalConfig#google_service_account}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/sql_global_config#id SqlGlobalConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceProfileArn`<sup>Optional</sup> <a name="InstanceProfileArn" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.instanceProfileArn"></a>

```csharp
public string InstanceProfileArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/sql_global_config#instance_profile_arn SqlGlobalConfig#instance_profile_arn}.

---

##### `SecurityPolicy`<sup>Optional</sup> <a name="SecurityPolicy" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.securityPolicy"></a>

```csharp
public string SecurityPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/sql_global_config#security_policy SqlGlobalConfig#security_policy}.

---

##### `SqlConfigParams`<sup>Optional</sup> <a name="SqlConfigParams" id="@cdktf/provider-databricks.sqlGlobalConfig.SqlGlobalConfigConfig.property.sqlConfigParams"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SqlConfigParams { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/sql_global_config#sql_config_params SqlGlobalConfig#sql_config_params}.

---



