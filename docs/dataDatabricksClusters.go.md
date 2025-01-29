# `dataDatabricksClusters` Submodule <a name="`dataDatabricksClusters` Submodule" id="@cdktf/provider-databricks.dataDatabricksClusters"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksClusters <a name="DataDatabricksClusters" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/data-sources/clusters databricks_clusters}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabricksclusters"

datadatabricksclusters.NewDataDatabricksClusters(scope Construct, id *string, config DataDatabricksClustersConfig) DataDatabricksClusters
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig">DataDatabricksClustersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig">DataDatabricksClustersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.putFilterBy">PutFilterBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.resetClusterNameContains">ResetClusterNameContains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.resetFilterBy">ResetFilterBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.resetIds">ResetIds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilterBy` <a name="PutFilterBy" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.putFilterBy"></a>

```go
func PutFilterBy(value DataDatabricksClustersFilterBy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.putFilterBy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterBy">DataDatabricksClustersFilterBy</a>

---

##### `ResetClusterNameContains` <a name="ResetClusterNameContains" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.resetClusterNameContains"></a>

```go
func ResetClusterNameContains()
```

##### `ResetFilterBy` <a name="ResetFilterBy" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.resetFilterBy"></a>

```go
func ResetFilterBy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.resetId"></a>

```go
func ResetId()
```

##### `ResetIds` <a name="ResetIds" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.resetIds"></a>

```go
func ResetIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksClusters resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabricksclusters"

datadatabricksclusters.DataDatabricksClusters_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabricksclusters"

datadatabricksclusters.DataDatabricksClusters_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabricksclusters"

datadatabricksclusters.DataDatabricksClusters_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabricksclusters"

datadatabricksclusters.DataDatabricksClusters_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDatabricksClusters resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksClusters to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksClusters that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/data-sources/clusters#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksClusters to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.filterBy">FilterBy</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference">DataDatabricksClustersFilterByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.clusterNameContainsInput">ClusterNameContainsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.filterByInput">FilterByInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterBy">DataDatabricksClustersFilterBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.idsInput">IdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.clusterNameContains">ClusterNameContains</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.ids">Ids</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `FilterBy`<sup>Required</sup> <a name="FilterBy" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.filterBy"></a>

```go
func FilterBy() DataDatabricksClustersFilterByOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference">DataDatabricksClustersFilterByOutputReference</a>

---

##### `ClusterNameContainsInput`<sup>Optional</sup> <a name="ClusterNameContainsInput" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.clusterNameContainsInput"></a>

```go
func ClusterNameContainsInput() *string
```

- *Type:* *string

---

##### `FilterByInput`<sup>Optional</sup> <a name="FilterByInput" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.filterByInput"></a>

```go
func FilterByInput() DataDatabricksClustersFilterBy
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterBy">DataDatabricksClustersFilterBy</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IdsInput`<sup>Optional</sup> <a name="IdsInput" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.idsInput"></a>

```go
func IdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ClusterNameContains`<sup>Required</sup> <a name="ClusterNameContains" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.clusterNameContains"></a>

```go
func ClusterNameContains() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Ids`<sup>Required</sup> <a name="Ids" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.ids"></a>

```go
func Ids() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksClustersConfig <a name="DataDatabricksClustersConfig" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabricksclusters"

&datadatabricksclusters.DataDatabricksClustersConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterNameContains: *string,
	FilterBy: github.com/cdktf/cdktf-provider-databricks-go/databricks.dataDatabricksClusters.DataDatabricksClustersFilterBy,
	Id: *string,
	Ids: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.property.clusterNameContains">ClusterNameContains</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/data-sources/clusters#cluster_name_contains DataDatabricksClusters#cluster_name_contains}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.property.filterBy">FilterBy</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterBy">DataDatabricksClustersFilterBy</a></code> | filter_by block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/data-sources/clusters#id DataDatabricksClusters#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.property.ids">Ids</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/data-sources/clusters#ids DataDatabricksClusters#ids}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterNameContains`<sup>Optional</sup> <a name="ClusterNameContains" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.property.clusterNameContains"></a>

```go
ClusterNameContains *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/data-sources/clusters#cluster_name_contains DataDatabricksClusters#cluster_name_contains}.

---

##### `FilterBy`<sup>Optional</sup> <a name="FilterBy" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.property.filterBy"></a>

```go
FilterBy DataDatabricksClustersFilterBy
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterBy">DataDatabricksClustersFilterBy</a>

filter_by block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/data-sources/clusters#filter_by DataDatabricksClusters#filter_by}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/data-sources/clusters#id DataDatabricksClusters#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Ids`<sup>Optional</sup> <a name="Ids" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.property.ids"></a>

```go
Ids *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/data-sources/clusters#ids DataDatabricksClusters#ids}.

---

### DataDatabricksClustersFilterBy <a name="DataDatabricksClustersFilterBy" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterBy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterBy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabricksclusters"

&datadatabricksclusters.DataDatabricksClustersFilterBy {
	ClusterSources: *[]*string,
	ClusterStates: *[]*string,
	IsPinned: interface{},
	PolicyId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterBy.property.clusterSources">ClusterSources</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/data-sources/clusters#cluster_sources DataDatabricksClusters#cluster_sources}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterBy.property.clusterStates">ClusterStates</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/data-sources/clusters#cluster_states DataDatabricksClusters#cluster_states}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterBy.property.isPinned">IsPinned</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/data-sources/clusters#is_pinned DataDatabricksClusters#is_pinned}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterBy.property.policyId">PolicyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/data-sources/clusters#policy_id DataDatabricksClusters#policy_id}. |

---

##### `ClusterSources`<sup>Optional</sup> <a name="ClusterSources" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterBy.property.clusterSources"></a>

```go
ClusterSources *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/data-sources/clusters#cluster_sources DataDatabricksClusters#cluster_sources}.

---

##### `ClusterStates`<sup>Optional</sup> <a name="ClusterStates" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterBy.property.clusterStates"></a>

```go
ClusterStates *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/data-sources/clusters#cluster_states DataDatabricksClusters#cluster_states}.

---

##### `IsPinned`<sup>Optional</sup> <a name="IsPinned" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterBy.property.isPinned"></a>

```go
IsPinned interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/data-sources/clusters#is_pinned DataDatabricksClusters#is_pinned}.

---

##### `PolicyId`<sup>Optional</sup> <a name="PolicyId" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterBy.property.policyId"></a>

```go
PolicyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.64.1/docs/data-sources/clusters#policy_id DataDatabricksClusters#policy_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksClustersFilterByOutputReference <a name="DataDatabricksClustersFilterByOutputReference" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabricksclusters"

datadatabricksclusters.NewDataDatabricksClustersFilterByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksClustersFilterByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.resetClusterSources">ResetClusterSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.resetClusterStates">ResetClusterStates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.resetIsPinned">ResetIsPinned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.resetPolicyId">ResetPolicyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClusterSources` <a name="ResetClusterSources" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.resetClusterSources"></a>

```go
func ResetClusterSources()
```

##### `ResetClusterStates` <a name="ResetClusterStates" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.resetClusterStates"></a>

```go
func ResetClusterStates()
```

##### `ResetIsPinned` <a name="ResetIsPinned" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.resetIsPinned"></a>

```go
func ResetIsPinned()
```

##### `ResetPolicyId` <a name="ResetPolicyId" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.resetPolicyId"></a>

```go
func ResetPolicyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.property.clusterSourcesInput">ClusterSourcesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.property.clusterStatesInput">ClusterStatesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.property.isPinnedInput">IsPinnedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.property.policyIdInput">PolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.property.clusterSources">ClusterSources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.property.clusterStates">ClusterStates</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.property.isPinned">IsPinned</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.property.policyId">PolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterBy">DataDatabricksClustersFilterBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClusterSourcesInput`<sup>Optional</sup> <a name="ClusterSourcesInput" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.property.clusterSourcesInput"></a>

```go
func ClusterSourcesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ClusterStatesInput`<sup>Optional</sup> <a name="ClusterStatesInput" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.property.clusterStatesInput"></a>

```go
func ClusterStatesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IsPinnedInput`<sup>Optional</sup> <a name="IsPinnedInput" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.property.isPinnedInput"></a>

```go
func IsPinnedInput() interface{}
```

- *Type:* interface{}

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.property.policyIdInput"></a>

```go
func PolicyIdInput() *string
```

- *Type:* *string

---

##### `ClusterSources`<sup>Required</sup> <a name="ClusterSources" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.property.clusterSources"></a>

```go
func ClusterSources() *[]*string
```

- *Type:* *[]*string

---

##### `ClusterStates`<sup>Required</sup> <a name="ClusterStates" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.property.clusterStates"></a>

```go
func ClusterStates() *[]*string
```

- *Type:* *[]*string

---

##### `IsPinned`<sup>Required</sup> <a name="IsPinned" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.property.isPinned"></a>

```go
func IsPinned() interface{}
```

- *Type:* interface{}

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.property.policyId"></a>

```go
func PolicyId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksClustersFilterBy
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterBy">DataDatabricksClustersFilterBy</a>

---



