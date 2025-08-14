# `dataDatabricksExternalMetadatas` Submodule <a name="`dataDatabricksExternalMetadatas` Submodule" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksExternalMetadatas <a name="DataDatabricksExternalMetadatas" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadatas databricks_external_metadatas}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksexternalmetadatas"

datadatabricksexternalmetadatas.NewDataDatabricksExternalMetadatas(scope Construct, id *string, config DataDatabricksExternalMetadatasConfig) DataDatabricksExternalMetadatas
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasConfig">DataDatabricksExternalMetadatasConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasConfig">DataDatabricksExternalMetadatasConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksExternalMetadatas resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksexternalmetadatas"

datadatabricksexternalmetadatas.DataDatabricksExternalMetadatas_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksexternalmetadatas"

datadatabricksexternalmetadatas.DataDatabricksExternalMetadatas_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksexternalmetadatas"

datadatabricksexternalmetadatas.DataDatabricksExternalMetadatas_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksexternalmetadatas"

datadatabricksexternalmetadatas.DataDatabricksExternalMetadatas_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDatabricksExternalMetadatas resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksExternalMetadatas to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksExternalMetadatas that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadatas#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksExternalMetadatas to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.property.externalMetadata">ExternalMetadata</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataList">DataDatabricksExternalMetadatasExternalMetadataList</a></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ExternalMetadata`<sup>Required</sup> <a name="ExternalMetadata" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.property.externalMetadata"></a>

```go
func ExternalMetadata() DataDatabricksExternalMetadatasExternalMetadataList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataList">DataDatabricksExternalMetadatasExternalMetadataList</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatas.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksExternalMetadatasConfig <a name="DataDatabricksExternalMetadatasConfig" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksexternalmetadatas"

&datadatabricksexternalmetadatas.DataDatabricksExternalMetadatasConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

### DataDatabricksExternalMetadatasExternalMetadata <a name="DataDatabricksExternalMetadatasExternalMetadata" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadata.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksexternalmetadatas"

&datadatabricksexternalmetadatas.DataDatabricksExternalMetadatasExternalMetadata {
	EntityType: *string,
	Name: *string,
	SystemType: *string,
	Columns: *[]*string,
	Description: *string,
	Owner: *string,
	Properties: *map[string]*string,
	Url: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadata.property.entityType">EntityType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadatas#entity_type DataDatabricksExternalMetadatas#entity_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadata.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadatas#name DataDatabricksExternalMetadatas#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadata.property.systemType">SystemType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadatas#system_type DataDatabricksExternalMetadatas#system_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadata.property.columns">Columns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadatas#columns DataDatabricksExternalMetadatas#columns}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadata.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadatas#description DataDatabricksExternalMetadatas#description}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadata.property.owner">Owner</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadatas#owner DataDatabricksExternalMetadatas#owner}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadata.property.properties">Properties</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadatas#properties DataDatabricksExternalMetadatas#properties}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadata.property.url">Url</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadatas#url DataDatabricksExternalMetadatas#url}. |

---

##### `EntityType`<sup>Required</sup> <a name="EntityType" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadata.property.entityType"></a>

```go
EntityType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadatas#entity_type DataDatabricksExternalMetadatas#entity_type}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadata.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadatas#name DataDatabricksExternalMetadatas#name}.

---

##### `SystemType`<sup>Required</sup> <a name="SystemType" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadata.property.systemType"></a>

```go
SystemType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadatas#system_type DataDatabricksExternalMetadatas#system_type}.

---

##### `Columns`<sup>Optional</sup> <a name="Columns" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadata.property.columns"></a>

```go
Columns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadatas#columns DataDatabricksExternalMetadatas#columns}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadata.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadatas#description DataDatabricksExternalMetadatas#description}.

---

##### `Owner`<sup>Optional</sup> <a name="Owner" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadata.property.owner"></a>

```go
Owner *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadatas#owner DataDatabricksExternalMetadatas#owner}.

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadata.property.properties"></a>

```go
Properties *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadatas#properties DataDatabricksExternalMetadatas#properties}.

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadata.property.url"></a>

```go
Url *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/external_metadatas#url DataDatabricksExternalMetadatas#url}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksExternalMetadatasExternalMetadataList <a name="DataDatabricksExternalMetadatasExternalMetadataList" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksexternalmetadatas"

datadatabricksexternalmetadatas.NewDataDatabricksExternalMetadatasExternalMetadataList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksExternalMetadatasExternalMetadataList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataList.get"></a>

```go
func Get(index *f64) DataDatabricksExternalMetadatasExternalMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksExternalMetadatasExternalMetadataOutputReference <a name="DataDatabricksExternalMetadatasExternalMetadataOutputReference" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksexternalmetadatas"

datadatabricksexternalmetadatas.NewDataDatabricksExternalMetadatasExternalMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksExternalMetadatasExternalMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.resetColumns">ResetColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.resetOwner">ResetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetColumns` <a name="ResetColumns" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.resetColumns"></a>

```go
func ResetColumns()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetOwner` <a name="ResetOwner" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.resetOwner"></a>

```go
func ResetOwner()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.resetProperties"></a>

```go
func ResetProperties()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.resetUrl"></a>

```go
func ResetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.property.metastoreId">MetastoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.property.updatedBy">UpdatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.property.columnsInput">ColumnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.property.entityTypeInput">EntityTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.property.ownerInput">OwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.property.systemTypeInput">SystemTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.property.columns">Columns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.property.entityType">EntityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.property.properties">Properties</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.property.systemType">SystemType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadata">DataDatabricksExternalMetadatasExternalMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MetastoreId`<sup>Required</sup> <a name="MetastoreId" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.property.metastoreId"></a>

```go
func MetastoreId() *string
```

- *Type:* *string

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.property.updatedBy"></a>

```go
func UpdatedBy() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `ColumnsInput`<sup>Optional</sup> <a name="ColumnsInput" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.property.columnsInput"></a>

```go
func ColumnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EntityTypeInput`<sup>Optional</sup> <a name="EntityTypeInput" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.property.entityTypeInput"></a>

```go
func EntityTypeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.property.ownerInput"></a>

```go
func OwnerInput() *string
```

- *Type:* *string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.property.propertiesInput"></a>

```go
func PropertiesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SystemTypeInput`<sup>Optional</sup> <a name="SystemTypeInput" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.property.systemTypeInput"></a>

```go
func SystemTypeInput() *string
```

- *Type:* *string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `Columns`<sup>Required</sup> <a name="Columns" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.property.columns"></a>

```go
func Columns() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EntityType`<sup>Required</sup> <a name="EntityType" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.property.entityType"></a>

```go
func EntityType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.property.properties"></a>

```go
func Properties() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SystemType`<sup>Required</sup> <a name="SystemType" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.property.systemType"></a>

```go
func SystemType() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksExternalMetadatasExternalMetadata
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalMetadatas.DataDatabricksExternalMetadatasExternalMetadata">DataDatabricksExternalMetadatasExternalMetadata</a>

---



