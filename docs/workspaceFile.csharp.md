# `databricks_workspace_file`

Refer to the Terraform Registory for docs: [`databricks_workspace_file`](https://registry.terraform.io/providers/databricks/databricks/1.25.0/docs/resources/workspace_file).

# `workspaceFile` Submodule <a name="`workspaceFile` Submodule" id="@cdktf/provider-databricks.workspaceFile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspaceFile <a name="WorkspaceFile" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.25.0/docs/resources/workspace_file databricks_workspace_file}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new WorkspaceFile(Construct Scope, string Id, WorkspaceFileConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFile.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFile.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFile.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFileConfig">WorkspaceFileConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFileConfig">WorkspaceFileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFile.resetContentBase64">ResetContentBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFile.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFile.resetMd5">ResetMd5</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFile.resetObjectId">ResetObjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFile.resetSource">ResetSource</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetContentBase64` <a name="ResetContentBase64" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.resetContentBase64"></a>

```csharp
private void ResetContentBase64()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMd5` <a name="ResetMd5" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.resetMd5"></a>

```csharp
private void ResetMd5()
```

##### `ResetObjectId` <a name="ResetObjectId" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.resetObjectId"></a>

```csharp
private void ResetObjectId()
```

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.resetSource"></a>

```csharp
private void ResetSource()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

WorkspaceFile.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

WorkspaceFile.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

WorkspaceFile.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFile.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFile.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFile.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFile.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFile.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFile.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFile.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFile.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFile.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFile.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFile.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFile.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFile.property.contentBase64Input">ContentBase64Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFile.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFile.property.md5Input">Md5Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFile.property.objectIdInput">ObjectIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFile.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFile.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFile.property.contentBase64">ContentBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFile.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFile.property.md5">Md5</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFile.property.objectId">ObjectId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFile.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFile.property.source">Source</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `ContentBase64Input`<sup>Optional</sup> <a name="ContentBase64Input" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.property.contentBase64Input"></a>

```csharp
public string ContentBase64Input { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Md5Input`<sup>Optional</sup> <a name="Md5Input" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.property.md5Input"></a>

```csharp
public string Md5Input { get; }
```

- *Type:* string

---

##### `ObjectIdInput`<sup>Optional</sup> <a name="ObjectIdInput" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.property.objectIdInput"></a>

```csharp
public double ObjectIdInput { get; }
```

- *Type:* double

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `ContentBase64`<sup>Required</sup> <a name="ContentBase64" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.property.contentBase64"></a>

```csharp
public string ContentBase64 { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Md5`<sup>Required</sup> <a name="Md5" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.property.md5"></a>

```csharp
public string Md5 { get; }
```

- *Type:* string

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.property.objectId"></a>

```csharp
public double ObjectId { get; }
```

- *Type:* double

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFile.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFile.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspaceFileConfig <a name="WorkspaceFileConfig" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFileConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new WorkspaceFileConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Path,
    string ContentBase64 = null,
    string Id = null,
    string Md5 = null,
    double ObjectId = null,
    string Source = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFileConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFileConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFileConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFileConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFileConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFileConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFileConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFileConfig.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.0/docs/resources/workspace_file#path WorkspaceFile#path}. |
| <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFileConfig.property.contentBase64">ContentBase64</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.0/docs/resources/workspace_file#content_base64 WorkspaceFile#content_base64}. |
| <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFileConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.0/docs/resources/workspace_file#id WorkspaceFile#id}. |
| <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFileConfig.property.md5">Md5</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.0/docs/resources/workspace_file#md5 WorkspaceFile#md5}. |
| <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFileConfig.property.objectId">ObjectId</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.0/docs/resources/workspace_file#object_id WorkspaceFile#object_id}. |
| <code><a href="#@cdktf/provider-databricks.workspaceFile.WorkspaceFileConfig.property.source">Source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.0/docs/resources/workspace_file#source WorkspaceFile#source}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFileConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFileConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFileConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFileConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFileConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFileConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFileConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFileConfig.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.0/docs/resources/workspace_file#path WorkspaceFile#path}.

---

##### `ContentBase64`<sup>Optional</sup> <a name="ContentBase64" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFileConfig.property.contentBase64"></a>

```csharp
public string ContentBase64 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.0/docs/resources/workspace_file#content_base64 WorkspaceFile#content_base64}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFileConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.0/docs/resources/workspace_file#id WorkspaceFile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Md5`<sup>Optional</sup> <a name="Md5" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFileConfig.property.md5"></a>

```csharp
public string Md5 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.0/docs/resources/workspace_file#md5 WorkspaceFile#md5}.

---

##### `ObjectId`<sup>Optional</sup> <a name="ObjectId" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFileConfig.property.objectId"></a>

```csharp
public double ObjectId { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.0/docs/resources/workspace_file#object_id WorkspaceFile#object_id}.

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-databricks.workspaceFile.WorkspaceFileConfig.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.0/docs/resources/workspace_file#source WorkspaceFile#source}.

---



