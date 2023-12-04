# `defaultNamespaceSettings` Submodule <a name="`defaultNamespaceSettings` Submodule" id="@cdktf/provider-databricks.defaultNamespaceSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DefaultNamespaceSettings <a name="DefaultNamespaceSettings" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/default_namespace_settings databricks_default_namespace_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DefaultNamespaceSettings(Construct Scope, string Id, DefaultNamespaceSettingsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig">DefaultNamespaceSettingsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig">DefaultNamespaceSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.putNamespace">PutNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.resetEtag">ResetEtag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.resetSettingName">ResetSettingName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutNamespace` <a name="PutNamespace" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.putNamespace"></a>

```csharp
private void PutNamespace(DefaultNamespaceSettingsNamespace Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.putNamespace.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespace">DefaultNamespaceSettingsNamespace</a>

---

##### `ResetEtag` <a name="ResetEtag" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.resetEtag"></a>

```csharp
private void ResetEtag()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSettingName` <a name="ResetSettingName" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.resetSettingName"></a>

```csharp
private void ResetSettingName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DefaultNamespaceSettings resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DefaultNamespaceSettings.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DefaultNamespaceSettings.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DefaultNamespaceSettings.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DefaultNamespaceSettings.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DefaultNamespaceSettings resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DefaultNamespaceSettings to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DefaultNamespaceSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/default_namespace_settings#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DefaultNamespaceSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.namespace">Namespace</a></code> | <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference">DefaultNamespaceSettingsNamespaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.etagInput">EtagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.namespaceInput">NamespaceInput</a></code> | <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespace">DefaultNamespaceSettingsNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.settingNameInput">SettingNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.settingName">SettingName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.namespace"></a>

```csharp
public DefaultNamespaceSettingsNamespaceOutputReference Namespace { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference">DefaultNamespaceSettingsNamespaceOutputReference</a>

---

##### `EtagInput`<sup>Optional</sup> <a name="EtagInput" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.etagInput"></a>

```csharp
public string EtagInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.namespaceInput"></a>

```csharp
public DefaultNamespaceSettingsNamespace NamespaceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespace">DefaultNamespaceSettingsNamespace</a>

---

##### `SettingNameInput`<sup>Optional</sup> <a name="SettingNameInput" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.settingNameInput"></a>

```csharp
public string SettingNameInput { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SettingName`<sup>Required</sup> <a name="SettingName" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.settingName"></a>

```csharp
public string SettingName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettings.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DefaultNamespaceSettingsConfig <a name="DefaultNamespaceSettingsConfig" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DefaultNamespaceSettingsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    DefaultNamespaceSettingsNamespace Namespace,
    string Etag = null,
    string Id = null,
    string SettingName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.property.namespace">Namespace</a></code> | <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespace">DefaultNamespaceSettingsNamespace</a></code> | namespace block. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.property.etag">Etag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/default_namespace_settings#etag DefaultNamespaceSettings#etag}. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/default_namespace_settings#id DefaultNamespaceSettings#id}. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.property.settingName">SettingName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/default_namespace_settings#setting_name DefaultNamespaceSettings#setting_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.property.namespace"></a>

```csharp
public DefaultNamespaceSettingsNamespace Namespace { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespace">DefaultNamespaceSettingsNamespace</a>

namespace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/default_namespace_settings#namespace DefaultNamespaceSettings#namespace}

---

##### `Etag`<sup>Optional</sup> <a name="Etag" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.property.etag"></a>

```csharp
public string Etag { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/default_namespace_settings#etag DefaultNamespaceSettings#etag}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/default_namespace_settings#id DefaultNamespaceSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SettingName`<sup>Optional</sup> <a name="SettingName" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsConfig.property.settingName"></a>

```csharp
public string SettingName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/default_namespace_settings#setting_name DefaultNamespaceSettings#setting_name}.

---

### DefaultNamespaceSettingsNamespace <a name="DefaultNamespaceSettingsNamespace" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespace.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DefaultNamespaceSettingsNamespace {
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespace.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/default_namespace_settings#value DefaultNamespaceSettings#value}. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespace.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/default_namespace_settings#value DefaultNamespaceSettings#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DefaultNamespaceSettingsNamespaceOutputReference <a name="DefaultNamespaceSettingsNamespaceOutputReference" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DefaultNamespaceSettingsNamespaceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespace">DefaultNamespaceSettingsNamespace</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespaceOutputReference.property.internalValue"></a>

```csharp
public DefaultNamespaceSettingsNamespace InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.defaultNamespaceSettings.DefaultNamespaceSettingsNamespace">DefaultNamespaceSettingsNamespace</a>

---



