# `sqlQuery` Submodule <a name="`sqlQuery` Submodule" id="@cdktf/provider-databricks.sqlQuery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqlQuery <a name="SqlQuery" id="@cdktf/provider-databricks.sqlQuery.SqlQuery"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query databricks_sql_query}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_query.SqlQuery;

SqlQuery.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dataSourceId(java.lang.String)
    .name(java.lang.String)
    .query(java.lang.String)
//  .createdAt(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .parameter(IResolvable|java.util.List<SqlQueryParameter>)
//  .parent(java.lang.String)
//  .runAsRole(java.lang.String)
//  .schedule(SqlQuerySchedule)
//  .tags(java.util.List<java.lang.String>)
//  .updatedAt(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.dataSourceId">dataSourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#data_source_id SqlQuery#data_source_id}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#name SqlQuery#name}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.query">query</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#query SqlQuery#query}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.createdAt">createdAt</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#created_at SqlQuery#created_at}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#description SqlQuery#description}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#id SqlQuery#id}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.parameter">parameter</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter">SqlQueryParameter</a>></code> | parameter block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#parent SqlQuery#parent}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.runAsRole">runAsRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#run_as_role SqlQuery#run_as_role}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule">SqlQuerySchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#tags SqlQuery#tags}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#updated_at SqlQuery#updated_at}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.dataSourceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#data_source_id SqlQuery#data_source_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#name SqlQuery#name}.

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.query"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#query SqlQuery#query}.

---

##### `createdAt`<sup>Optional</sup> <a name="createdAt" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.createdAt"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#created_at SqlQuery#created_at}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#description SqlQuery#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#id SqlQuery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameter`<sup>Optional</sup> <a name="parameter" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.parameter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter">SqlQueryParameter</a>>

parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#parameter SqlQuery#parameter}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#parent SqlQuery#parent}.

---

##### `runAsRole`<sup>Optional</sup> <a name="runAsRole" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.runAsRole"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#run_as_role SqlQuery#run_as_role}.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.schedule"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule">SqlQuerySchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#schedule SqlQuery#schedule}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.tags"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#tags SqlQuery#tags}.

---

##### `updatedAt`<sup>Optional</sup> <a name="updatedAt" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.updatedAt"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#updated_at SqlQuery#updated_at}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.putParameter">putParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.resetCreatedAt">resetCreatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.resetParameter">resetParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.resetParent">resetParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.resetRunAsRole">resetRunAsRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.resetSchedule">resetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.resetUpdatedAt">resetUpdatedAt</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putParameter` <a name="putParameter" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.putParameter"></a>

```java
public void putParameter(IResolvable|java.util.List<SqlQueryParameter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.putParameter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter">SqlQueryParameter</a>>

---

##### `putSchedule` <a name="putSchedule" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.putSchedule"></a>

```java
public void putSchedule(SqlQuerySchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule">SqlQuerySchedule</a>

---

##### `resetCreatedAt` <a name="resetCreatedAt" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.resetCreatedAt"></a>

```java
public void resetCreatedAt()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.resetId"></a>

```java
public void resetId()
```

##### `resetParameter` <a name="resetParameter" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.resetParameter"></a>

```java
public void resetParameter()
```

##### `resetParent` <a name="resetParent" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.resetParent"></a>

```java
public void resetParent()
```

##### `resetRunAsRole` <a name="resetRunAsRole" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.resetRunAsRole"></a>

```java
public void resetRunAsRole()
```

##### `resetSchedule` <a name="resetSchedule" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.resetSchedule"></a>

```java
public void resetSchedule()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.resetTags"></a>

```java
public void resetTags()
```

##### `resetUpdatedAt` <a name="resetUpdatedAt" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.resetUpdatedAt"></a>

```java
public void resetUpdatedAt()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SqlQuery resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_query.SqlQuery;

SqlQuery.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_query.SqlQuery;

SqlQuery.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_query.SqlQuery;

SqlQuery.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_query.SqlQuery;

SqlQuery.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SqlQuery.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SqlQuery resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SqlQuery to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SqlQuery that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SqlQuery to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.parameter">parameter</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList">SqlQueryParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference">SqlQueryScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.createdAtInput">createdAtInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.dataSourceIdInput">dataSourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.parameterInput">parameterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter">SqlQueryParameter</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.queryInput">queryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.runAsRoleInput">runAsRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.scheduleInput">scheduleInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule">SqlQuerySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.updatedAtInput">updatedAtInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.dataSourceId">dataSourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.runAsRole">runAsRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.parameter"></a>

```java
public SqlQueryParameterList getParameter();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList">SqlQueryParameterList</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.schedule"></a>

```java
public SqlQueryScheduleOutputReference getSchedule();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference">SqlQueryScheduleOutputReference</a>

---

##### `createdAtInput`<sup>Optional</sup> <a name="createdAtInput" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.createdAtInput"></a>

```java
public java.lang.String getCreatedAtInput();
```

- *Type:* java.lang.String

---

##### `dataSourceIdInput`<sup>Optional</sup> <a name="dataSourceIdInput" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.dataSourceIdInput"></a>

```java
public java.lang.String getDataSourceIdInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parameterInput`<sup>Optional</sup> <a name="parameterInput" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.parameterInput"></a>

```java
public IResolvable|java.util.List<SqlQueryParameter> getParameterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter">SqlQueryParameter</a>>

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.queryInput"></a>

```java
public java.lang.String getQueryInput();
```

- *Type:* java.lang.String

---

##### `runAsRoleInput`<sup>Optional</sup> <a name="runAsRoleInput" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.runAsRoleInput"></a>

```java
public java.lang.String getRunAsRoleInput();
```

- *Type:* java.lang.String

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.scheduleInput"></a>

```java
public SqlQuerySchedule getScheduleInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule">SqlQuerySchedule</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `updatedAtInput`<sup>Optional</sup> <a name="updatedAtInput" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.updatedAtInput"></a>

```java
public java.lang.String getUpdatedAtInput();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.dataSourceId"></a>

```java
public java.lang.String getDataSourceId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

##### `runAsRole`<sup>Required</sup> <a name="runAsRole" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.runAsRole"></a>

```java
public java.lang.String getRunAsRole();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SqlQueryConfig <a name="SqlQueryConfig" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_query.SqlQueryConfig;

SqlQueryConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dataSourceId(java.lang.String)
    .name(java.lang.String)
    .query(java.lang.String)
//  .createdAt(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .parameter(IResolvable|java.util.List<SqlQueryParameter>)
//  .parent(java.lang.String)
//  .runAsRole(java.lang.String)
//  .schedule(SqlQuerySchedule)
//  .tags(java.util.List<java.lang.String>)
//  .updatedAt(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.dataSourceId">dataSourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#data_source_id SqlQuery#data_source_id}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#name SqlQuery#name}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.query">query</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#query SqlQuery#query}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#created_at SqlQuery#created_at}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#description SqlQuery#description}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#id SqlQuery#id}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.parameter">parameter</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter">SqlQueryParameter</a>></code> | parameter block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#parent SqlQuery#parent}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.runAsRole">runAsRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#run_as_role SqlQuery#run_as_role}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule">SqlQuerySchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#tags SqlQuery#tags}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#updated_at SqlQuery#updated_at}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.dataSourceId"></a>

```java
public java.lang.String getDataSourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#data_source_id SqlQuery#data_source_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#name SqlQuery#name}.

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#query SqlQuery#query}.

---

##### `createdAt`<sup>Optional</sup> <a name="createdAt" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#created_at SqlQuery#created_at}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#description SqlQuery#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#id SqlQuery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameter`<sup>Optional</sup> <a name="parameter" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.parameter"></a>

```java
public IResolvable|java.util.List<SqlQueryParameter> getParameter();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter">SqlQueryParameter</a>>

parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#parameter SqlQuery#parameter}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#parent SqlQuery#parent}.

---

##### `runAsRole`<sup>Optional</sup> <a name="runAsRole" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.runAsRole"></a>

```java
public java.lang.String getRunAsRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#run_as_role SqlQuery#run_as_role}.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.schedule"></a>

```java
public SqlQuerySchedule getSchedule();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule">SqlQuerySchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#schedule SqlQuery#schedule}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#tags SqlQuery#tags}.

---

##### `updatedAt`<sup>Optional</sup> <a name="updatedAt" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#updated_at SqlQuery#updated_at}.

---

### SqlQueryParameter <a name="SqlQueryParameter" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_query.SqlQueryParameter;

SqlQueryParameter.builder()
    .name(java.lang.String)
//  .date(SqlQueryParameterDate)
//  .dateRange(SqlQueryParameterDateRange)
//  .datetime(SqlQueryParameterDatetime)
//  .datetimeRange(SqlQueryParameterDatetimeRange)
//  .datetimesec(SqlQueryParameterDatetimesec)
//  .datetimesecRange(SqlQueryParameterDatetimesecRange)
//  .enum(SqlQueryParameterEnum)
//  .number(SqlQueryParameterNumber)
//  .query(SqlQueryParameterQuery)
//  .text(SqlQueryParameterText)
//  .title(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#name SqlQuery#name}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.date">date</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDate">SqlQueryParameterDate</a></code> | date block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.dateRange">dateRange</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRange">SqlQueryParameterDateRange</a></code> | date_range block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.datetime">datetime</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetime">SqlQueryParameterDatetime</a></code> | datetime block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.datetimeRange">datetimeRange</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRange">SqlQueryParameterDatetimeRange</a></code> | datetime_range block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.datetimesec">datetimesec</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesec">SqlQueryParameterDatetimesec</a></code> | datetimesec block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.datetimesecRange">datetimesecRange</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRange">SqlQueryParameterDatetimesecRange</a></code> | datetimesec_range block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.enum">enum</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum">SqlQueryParameterEnum</a></code> | enum block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.number">number</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumber">SqlQueryParameterNumber</a></code> | number block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.query">query</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery">SqlQueryParameterQuery</a></code> | query block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.text">text</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterText">SqlQueryParameterText</a></code> | text block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.title">title</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#title SqlQuery#title}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#name SqlQuery#name}.

---

##### `date`<sup>Optional</sup> <a name="date" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.date"></a>

```java
public SqlQueryParameterDate getDate();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDate">SqlQueryParameterDate</a>

date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#date SqlQuery#date}

---

##### `dateRange`<sup>Optional</sup> <a name="dateRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.dateRange"></a>

```java
public SqlQueryParameterDateRange getDateRange();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRange">SqlQueryParameterDateRange</a>

date_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#date_range SqlQuery#date_range}

---

##### `datetime`<sup>Optional</sup> <a name="datetime" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.datetime"></a>

```java
public SqlQueryParameterDatetime getDatetime();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetime">SqlQueryParameterDatetime</a>

datetime block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#datetime SqlQuery#datetime}

---

##### `datetimeRange`<sup>Optional</sup> <a name="datetimeRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.datetimeRange"></a>

```java
public SqlQueryParameterDatetimeRange getDatetimeRange();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRange">SqlQueryParameterDatetimeRange</a>

datetime_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#datetime_range SqlQuery#datetime_range}

---

##### `datetimesec`<sup>Optional</sup> <a name="datetimesec" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.datetimesec"></a>

```java
public SqlQueryParameterDatetimesec getDatetimesec();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesec">SqlQueryParameterDatetimesec</a>

datetimesec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#datetimesec SqlQuery#datetimesec}

---

##### `datetimesecRange`<sup>Optional</sup> <a name="datetimesecRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.datetimesecRange"></a>

```java
public SqlQueryParameterDatetimesecRange getDatetimesecRange();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRange">SqlQueryParameterDatetimesecRange</a>

datetimesec_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#datetimesec_range SqlQuery#datetimesec_range}

---

##### `enum`<sup>Optional</sup> <a name="enum" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.enum"></a>

```java
public SqlQueryParameterEnum getEnum();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum">SqlQueryParameterEnum</a>

enum block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#enum SqlQuery#enum}

---

##### `number`<sup>Optional</sup> <a name="number" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.number"></a>

```java
public SqlQueryParameterNumber getNumber();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumber">SqlQueryParameterNumber</a>

number block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#number SqlQuery#number}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.query"></a>

```java
public SqlQueryParameterQuery getQuery();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery">SqlQueryParameterQuery</a>

query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#query SqlQuery#query}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.text"></a>

```java
public SqlQueryParameterText getText();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterText">SqlQueryParameterText</a>

text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#text SqlQuery#text}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#title SqlQuery#title}.

---

### SqlQueryParameterDate <a name="SqlQueryParameterDate" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_query.SqlQueryParameterDate;

SqlQueryParameterDate.builder()
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDate.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#value SqlQuery#value}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDate.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#value SqlQuery#value}.

---

### SqlQueryParameterDateRange <a name="SqlQueryParameterDateRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_query.SqlQueryParameterDateRange;

SqlQueryParameterDateRange.builder()
//  .range(SqlQueryParameterDateRangeRange)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRange.property.range">range</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRange">SqlQueryParameterDateRangeRange</a></code> | range block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRange.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#value SqlQuery#value}. |

---

##### `range`<sup>Optional</sup> <a name="range" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRange.property.range"></a>

```java
public SqlQueryParameterDateRangeRange getRange();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRange">SqlQueryParameterDateRangeRange</a>

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#range SqlQuery#range}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRange.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#value SqlQuery#value}.

---

### SqlQueryParameterDateRangeRange <a name="SqlQueryParameterDateRangeRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_query.SqlQueryParameterDateRangeRange;

SqlQueryParameterDateRangeRange.builder()
    .end(java.lang.String)
    .start(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRange.property.end">end</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#end SqlQuery#end}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRange.property.start">start</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#start SqlQuery#start}. |

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRange.property.end"></a>

```java
public java.lang.String getEnd();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#end SqlQuery#end}.

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRange.property.start"></a>

```java
public java.lang.String getStart();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#start SqlQuery#start}.

---

### SqlQueryParameterDatetime <a name="SqlQueryParameterDatetime" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetime.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_query.SqlQueryParameterDatetime;

SqlQueryParameterDatetime.builder()
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetime.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#value SqlQuery#value}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetime.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#value SqlQuery#value}.

---

### SqlQueryParameterDatetimeRange <a name="SqlQueryParameterDatetimeRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_query.SqlQueryParameterDatetimeRange;

SqlQueryParameterDatetimeRange.builder()
//  .range(SqlQueryParameterDatetimeRangeRange)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRange.property.range">range</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRange">SqlQueryParameterDatetimeRangeRange</a></code> | range block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRange.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#value SqlQuery#value}. |

---

##### `range`<sup>Optional</sup> <a name="range" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRange.property.range"></a>

```java
public SqlQueryParameterDatetimeRangeRange getRange();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRange">SqlQueryParameterDatetimeRangeRange</a>

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#range SqlQuery#range}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRange.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#value SqlQuery#value}.

---

### SqlQueryParameterDatetimeRangeRange <a name="SqlQueryParameterDatetimeRangeRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_query.SqlQueryParameterDatetimeRangeRange;

SqlQueryParameterDatetimeRangeRange.builder()
    .end(java.lang.String)
    .start(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRange.property.end">end</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#end SqlQuery#end}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRange.property.start">start</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#start SqlQuery#start}. |

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRange.property.end"></a>

```java
public java.lang.String getEnd();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#end SqlQuery#end}.

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRange.property.start"></a>

```java
public java.lang.String getStart();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#start SqlQuery#start}.

---

### SqlQueryParameterDatetimesec <a name="SqlQueryParameterDatetimesec" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_query.SqlQueryParameterDatetimesec;

SqlQueryParameterDatetimesec.builder()
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesec.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#value SqlQuery#value}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesec.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#value SqlQuery#value}.

---

### SqlQueryParameterDatetimesecRange <a name="SqlQueryParameterDatetimesecRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_query.SqlQueryParameterDatetimesecRange;

SqlQueryParameterDatetimesecRange.builder()
//  .range(SqlQueryParameterDatetimesecRangeRange)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRange.property.range">range</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRange">SqlQueryParameterDatetimesecRangeRange</a></code> | range block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRange.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#value SqlQuery#value}. |

---

##### `range`<sup>Optional</sup> <a name="range" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRange.property.range"></a>

```java
public SqlQueryParameterDatetimesecRangeRange getRange();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRange">SqlQueryParameterDatetimesecRangeRange</a>

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#range SqlQuery#range}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRange.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#value SqlQuery#value}.

---

### SqlQueryParameterDatetimesecRangeRange <a name="SqlQueryParameterDatetimesecRangeRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRange.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_query.SqlQueryParameterDatetimesecRangeRange;

SqlQueryParameterDatetimesecRangeRange.builder()
    .end(java.lang.String)
    .start(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRange.property.end">end</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#end SqlQuery#end}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRange.property.start">start</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#start SqlQuery#start}. |

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRange.property.end"></a>

```java
public java.lang.String getEnd();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#end SqlQuery#end}.

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRange.property.start"></a>

```java
public java.lang.String getStart();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#start SqlQuery#start}.

---

### SqlQueryParameterEnum <a name="SqlQueryParameterEnum" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_query.SqlQueryParameterEnum;

SqlQueryParameterEnum.builder()
    .options(java.util.List<java.lang.String>)
//  .multiple(SqlQueryParameterEnumMultiple)
//  .value(java.lang.String)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum.property.options">options</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#options SqlQuery#options}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum.property.multiple">multiple</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple">SqlQueryParameterEnumMultiple</a></code> | multiple block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#value SqlQuery#value}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#values SqlQuery#values}. |

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum.property.options"></a>

```java
public java.util.List<java.lang.String> getOptions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#options SqlQuery#options}.

---

##### `multiple`<sup>Optional</sup> <a name="multiple" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum.property.multiple"></a>

```java
public SqlQueryParameterEnumMultiple getMultiple();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple">SqlQueryParameterEnumMultiple</a>

multiple block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#multiple SqlQuery#multiple}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#value SqlQuery#value}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#values SqlQuery#values}.

---

### SqlQueryParameterEnumMultiple <a name="SqlQueryParameterEnumMultiple" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_query.SqlQueryParameterEnumMultiple;

SqlQueryParameterEnumMultiple.builder()
    .separator(java.lang.String)
//  .prefix(java.lang.String)
//  .suffix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple.property.separator">separator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#separator SqlQuery#separator}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple.property.prefix">prefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#prefix SqlQuery#prefix}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple.property.suffix">suffix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#suffix SqlQuery#suffix}. |

---

##### `separator`<sup>Required</sup> <a name="separator" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple.property.separator"></a>

```java
public java.lang.String getSeparator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#separator SqlQuery#separator}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#prefix SqlQuery#prefix}.

---

##### `suffix`<sup>Optional</sup> <a name="suffix" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple.property.suffix"></a>

```java
public java.lang.String getSuffix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#suffix SqlQuery#suffix}.

---

### SqlQueryParameterNumber <a name="SqlQueryParameterNumber" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumber"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumber.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_query.SqlQueryParameterNumber;

SqlQueryParameterNumber.builder()
    .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumber.property.value">value</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#value SqlQuery#value}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumber.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#value SqlQuery#value}.

---

### SqlQueryParameterQuery <a name="SqlQueryParameterQuery" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_query.SqlQueryParameterQuery;

SqlQueryParameterQuery.builder()
    .queryId(java.lang.String)
//  .multiple(SqlQueryParameterQueryMultiple)
//  .value(java.lang.String)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery.property.queryId">queryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#query_id SqlQuery#query_id}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery.property.multiple">multiple</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple">SqlQueryParameterQueryMultiple</a></code> | multiple block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#value SqlQuery#value}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#values SqlQuery#values}. |

---

##### `queryId`<sup>Required</sup> <a name="queryId" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery.property.queryId"></a>

```java
public java.lang.String getQueryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#query_id SqlQuery#query_id}.

---

##### `multiple`<sup>Optional</sup> <a name="multiple" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery.property.multiple"></a>

```java
public SqlQueryParameterQueryMultiple getMultiple();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple">SqlQueryParameterQueryMultiple</a>

multiple block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#multiple SqlQuery#multiple}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#value SqlQuery#value}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#values SqlQuery#values}.

---

### SqlQueryParameterQueryMultiple <a name="SqlQueryParameterQueryMultiple" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_query.SqlQueryParameterQueryMultiple;

SqlQueryParameterQueryMultiple.builder()
    .separator(java.lang.String)
//  .prefix(java.lang.String)
//  .suffix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple.property.separator">separator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#separator SqlQuery#separator}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple.property.prefix">prefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#prefix SqlQuery#prefix}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple.property.suffix">suffix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#suffix SqlQuery#suffix}. |

---

##### `separator`<sup>Required</sup> <a name="separator" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple.property.separator"></a>

```java
public java.lang.String getSeparator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#separator SqlQuery#separator}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#prefix SqlQuery#prefix}.

---

##### `suffix`<sup>Optional</sup> <a name="suffix" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple.property.suffix"></a>

```java
public java.lang.String getSuffix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#suffix SqlQuery#suffix}.

---

### SqlQueryParameterText <a name="SqlQueryParameterText" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterText"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterText.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_query.SqlQueryParameterText;

SqlQueryParameterText.builder()
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterText.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#value SqlQuery#value}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterText.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#value SqlQuery#value}.

---

### SqlQuerySchedule <a name="SqlQuerySchedule" id="@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_query.SqlQuerySchedule;

SqlQuerySchedule.builder()
//  .continuous(SqlQueryScheduleContinuous)
//  .daily(SqlQueryScheduleDaily)
//  .weekly(SqlQueryScheduleWeekly)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule.property.continuous">continuous</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuous">SqlQueryScheduleContinuous</a></code> | continuous block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule.property.daily">daily</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily">SqlQueryScheduleDaily</a></code> | daily block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule.property.weekly">weekly</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly">SqlQueryScheduleWeekly</a></code> | weekly block. |

---

##### `continuous`<sup>Optional</sup> <a name="continuous" id="@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule.property.continuous"></a>

```java
public SqlQueryScheduleContinuous getContinuous();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuous">SqlQueryScheduleContinuous</a>

continuous block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#continuous SqlQuery#continuous}

---

##### `daily`<sup>Optional</sup> <a name="daily" id="@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule.property.daily"></a>

```java
public SqlQueryScheduleDaily getDaily();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily">SqlQueryScheduleDaily</a>

daily block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#daily SqlQuery#daily}

---

##### `weekly`<sup>Optional</sup> <a name="weekly" id="@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule.property.weekly"></a>

```java
public SqlQueryScheduleWeekly getWeekly();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly">SqlQueryScheduleWeekly</a>

weekly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#weekly SqlQuery#weekly}

---

### SqlQueryScheduleContinuous <a name="SqlQueryScheduleContinuous" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuous"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuous.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_query.SqlQueryScheduleContinuous;

SqlQueryScheduleContinuous.builder()
    .intervalSeconds(java.lang.Number)
//  .untilDate(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuous.property.intervalSeconds">intervalSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#interval_seconds SqlQuery#interval_seconds}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuous.property.untilDate">untilDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#until_date SqlQuery#until_date}. |

---

##### `intervalSeconds`<sup>Required</sup> <a name="intervalSeconds" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuous.property.intervalSeconds"></a>

```java
public java.lang.Number getIntervalSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#interval_seconds SqlQuery#interval_seconds}.

---

##### `untilDate`<sup>Optional</sup> <a name="untilDate" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuous.property.untilDate"></a>

```java
public java.lang.String getUntilDate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#until_date SqlQuery#until_date}.

---

### SqlQueryScheduleDaily <a name="SqlQueryScheduleDaily" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_query.SqlQueryScheduleDaily;

SqlQueryScheduleDaily.builder()
    .intervalDays(java.lang.Number)
    .timeOfDay(java.lang.String)
//  .untilDate(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily.property.intervalDays">intervalDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#interval_days SqlQuery#interval_days}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily.property.timeOfDay">timeOfDay</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#time_of_day SqlQuery#time_of_day}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily.property.untilDate">untilDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#until_date SqlQuery#until_date}. |

---

##### `intervalDays`<sup>Required</sup> <a name="intervalDays" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily.property.intervalDays"></a>

```java
public java.lang.Number getIntervalDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#interval_days SqlQuery#interval_days}.

---

##### `timeOfDay`<sup>Required</sup> <a name="timeOfDay" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily.property.timeOfDay"></a>

```java
public java.lang.String getTimeOfDay();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#time_of_day SqlQuery#time_of_day}.

---

##### `untilDate`<sup>Optional</sup> <a name="untilDate" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily.property.untilDate"></a>

```java
public java.lang.String getUntilDate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#until_date SqlQuery#until_date}.

---

### SqlQueryScheduleWeekly <a name="SqlQueryScheduleWeekly" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_query.SqlQueryScheduleWeekly;

SqlQueryScheduleWeekly.builder()
    .dayOfWeek(java.lang.String)
    .intervalWeeks(java.lang.Number)
    .timeOfDay(java.lang.String)
//  .untilDate(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly.property.dayOfWeek">dayOfWeek</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#day_of_week SqlQuery#day_of_week}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly.property.intervalWeeks">intervalWeeks</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#interval_weeks SqlQuery#interval_weeks}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly.property.timeOfDay">timeOfDay</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#time_of_day SqlQuery#time_of_day}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly.property.untilDate">untilDate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#until_date SqlQuery#until_date}. |

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly.property.dayOfWeek"></a>

```java
public java.lang.String getDayOfWeek();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#day_of_week SqlQuery#day_of_week}.

---

##### `intervalWeeks`<sup>Required</sup> <a name="intervalWeeks" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly.property.intervalWeeks"></a>

```java
public java.lang.Number getIntervalWeeks();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#interval_weeks SqlQuery#interval_weeks}.

---

##### `timeOfDay`<sup>Required</sup> <a name="timeOfDay" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly.property.timeOfDay"></a>

```java
public java.lang.String getTimeOfDay();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#time_of_day SqlQuery#time_of_day}.

---

##### `untilDate`<sup>Optional</sup> <a name="untilDate" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly.property.untilDate"></a>

```java
public java.lang.String getUntilDate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/sql_query#until_date SqlQuery#until_date}.

---

## Classes <a name="Classes" id="Classes"></a>

### SqlQueryParameterDateOutputReference <a name="SqlQueryParameterDateOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_query.SqlQueryParameterDateOutputReference;

new SqlQueryParameterDateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDate">SqlQueryParameterDate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.property.internalValue"></a>

```java
public SqlQueryParameterDate getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDate">SqlQueryParameterDate</a>

---


### SqlQueryParameterDateRangeOutputReference <a name="SqlQueryParameterDateRangeOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_query.SqlQueryParameterDateRangeOutputReference;

new SqlQueryParameterDateRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.putRange">putRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.resetRange">resetRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRange` <a name="putRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.putRange"></a>

```java
public void putRange(SqlQueryParameterDateRangeRange value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.putRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRange">SqlQueryParameterDateRangeRange</a>

---

##### `resetRange` <a name="resetRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.resetRange"></a>

```java
public void resetRange()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.range">range</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference">SqlQueryParameterDateRangeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.rangeInput">rangeInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRange">SqlQueryParameterDateRangeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRange">SqlQueryParameterDateRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.range"></a>

```java
public SqlQueryParameterDateRangeRangeOutputReference getRange();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference">SqlQueryParameterDateRangeRangeOutputReference</a>

---

##### `rangeInput`<sup>Optional</sup> <a name="rangeInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.rangeInput"></a>

```java
public SqlQueryParameterDateRangeRange getRangeInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRange">SqlQueryParameterDateRangeRange</a>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.internalValue"></a>

```java
public SqlQueryParameterDateRange getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRange">SqlQueryParameterDateRange</a>

---


### SqlQueryParameterDateRangeRangeOutputReference <a name="SqlQueryParameterDateRangeRangeOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_query.SqlQueryParameterDateRangeRangeOutputReference;

new SqlQueryParameterDateRangeRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.endInput">endInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.startInput">startInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.end">end</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.start">start</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRange">SqlQueryParameterDateRangeRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endInput`<sup>Optional</sup> <a name="endInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.endInput"></a>

```java
public java.lang.String getEndInput();
```

- *Type:* java.lang.String

---

##### `startInput`<sup>Optional</sup> <a name="startInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.startInput"></a>

```java
public java.lang.String getStartInput();
```

- *Type:* java.lang.String

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.end"></a>

```java
public java.lang.String getEnd();
```

- *Type:* java.lang.String

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.start"></a>

```java
public java.lang.String getStart();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.internalValue"></a>

```java
public SqlQueryParameterDateRangeRange getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRange">SqlQueryParameterDateRangeRange</a>

---


### SqlQueryParameterDatetimeOutputReference <a name="SqlQueryParameterDatetimeOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_query.SqlQueryParameterDatetimeOutputReference;

new SqlQueryParameterDatetimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetime">SqlQueryParameterDatetime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.property.internalValue"></a>

```java
public SqlQueryParameterDatetime getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetime">SqlQueryParameterDatetime</a>

---


### SqlQueryParameterDatetimeRangeOutputReference <a name="SqlQueryParameterDatetimeRangeOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_query.SqlQueryParameterDatetimeRangeOutputReference;

new SqlQueryParameterDatetimeRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.putRange">putRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.resetRange">resetRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRange` <a name="putRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.putRange"></a>

```java
public void putRange(SqlQueryParameterDatetimeRangeRange value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.putRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRange">SqlQueryParameterDatetimeRangeRange</a>

---

##### `resetRange` <a name="resetRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.resetRange"></a>

```java
public void resetRange()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.range">range</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference">SqlQueryParameterDatetimeRangeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.rangeInput">rangeInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRange">SqlQueryParameterDatetimeRangeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRange">SqlQueryParameterDatetimeRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.range"></a>

```java
public SqlQueryParameterDatetimeRangeRangeOutputReference getRange();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference">SqlQueryParameterDatetimeRangeRangeOutputReference</a>

---

##### `rangeInput`<sup>Optional</sup> <a name="rangeInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.rangeInput"></a>

```java
public SqlQueryParameterDatetimeRangeRange getRangeInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRange">SqlQueryParameterDatetimeRangeRange</a>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.internalValue"></a>

```java
public SqlQueryParameterDatetimeRange getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRange">SqlQueryParameterDatetimeRange</a>

---


### SqlQueryParameterDatetimeRangeRangeOutputReference <a name="SqlQueryParameterDatetimeRangeRangeOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_query.SqlQueryParameterDatetimeRangeRangeOutputReference;

new SqlQueryParameterDatetimeRangeRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.endInput">endInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.startInput">startInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.end">end</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.start">start</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRange">SqlQueryParameterDatetimeRangeRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endInput`<sup>Optional</sup> <a name="endInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.endInput"></a>

```java
public java.lang.String getEndInput();
```

- *Type:* java.lang.String

---

##### `startInput`<sup>Optional</sup> <a name="startInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.startInput"></a>

```java
public java.lang.String getStartInput();
```

- *Type:* java.lang.String

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.end"></a>

```java
public java.lang.String getEnd();
```

- *Type:* java.lang.String

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.start"></a>

```java
public java.lang.String getStart();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.internalValue"></a>

```java
public SqlQueryParameterDatetimeRangeRange getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRange">SqlQueryParameterDatetimeRangeRange</a>

---


### SqlQueryParameterDatetimesecOutputReference <a name="SqlQueryParameterDatetimesecOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_query.SqlQueryParameterDatetimesecOutputReference;

new SqlQueryParameterDatetimesecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesec">SqlQueryParameterDatetimesec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.property.internalValue"></a>

```java
public SqlQueryParameterDatetimesec getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesec">SqlQueryParameterDatetimesec</a>

---


### SqlQueryParameterDatetimesecRangeOutputReference <a name="SqlQueryParameterDatetimesecRangeOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_query.SqlQueryParameterDatetimesecRangeOutputReference;

new SqlQueryParameterDatetimesecRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.putRange">putRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.resetRange">resetRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRange` <a name="putRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.putRange"></a>

```java
public void putRange(SqlQueryParameterDatetimesecRangeRange value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.putRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRange">SqlQueryParameterDatetimesecRangeRange</a>

---

##### `resetRange` <a name="resetRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.resetRange"></a>

```java
public void resetRange()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.range">range</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference">SqlQueryParameterDatetimesecRangeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.rangeInput">rangeInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRange">SqlQueryParameterDatetimesecRangeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRange">SqlQueryParameterDatetimesecRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.range"></a>

```java
public SqlQueryParameterDatetimesecRangeRangeOutputReference getRange();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference">SqlQueryParameterDatetimesecRangeRangeOutputReference</a>

---

##### `rangeInput`<sup>Optional</sup> <a name="rangeInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.rangeInput"></a>

```java
public SqlQueryParameterDatetimesecRangeRange getRangeInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRange">SqlQueryParameterDatetimesecRangeRange</a>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.internalValue"></a>

```java
public SqlQueryParameterDatetimesecRange getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRange">SqlQueryParameterDatetimesecRange</a>

---


### SqlQueryParameterDatetimesecRangeRangeOutputReference <a name="SqlQueryParameterDatetimesecRangeRangeOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_query.SqlQueryParameterDatetimesecRangeRangeOutputReference;

new SqlQueryParameterDatetimesecRangeRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.endInput">endInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.startInput">startInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.end">end</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.start">start</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRange">SqlQueryParameterDatetimesecRangeRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endInput`<sup>Optional</sup> <a name="endInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.endInput"></a>

```java
public java.lang.String getEndInput();
```

- *Type:* java.lang.String

---

##### `startInput`<sup>Optional</sup> <a name="startInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.startInput"></a>

```java
public java.lang.String getStartInput();
```

- *Type:* java.lang.String

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.end"></a>

```java
public java.lang.String getEnd();
```

- *Type:* java.lang.String

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.start"></a>

```java
public java.lang.String getStart();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.internalValue"></a>

```java
public SqlQueryParameterDatetimesecRangeRange getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRange">SqlQueryParameterDatetimesecRangeRange</a>

---


### SqlQueryParameterEnumMultipleOutputReference <a name="SqlQueryParameterEnumMultipleOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_query.SqlQueryParameterEnumMultipleOutputReference;

new SqlQueryParameterEnumMultipleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.resetSuffix">resetSuffix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```

##### `resetSuffix` <a name="resetSuffix" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.resetSuffix"></a>

```java
public void resetSuffix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.separatorInput">separatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.suffixInput">suffixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.separator">separator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.suffix">suffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple">SqlQueryParameterEnumMultiple</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `separatorInput`<sup>Optional</sup> <a name="separatorInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.separatorInput"></a>

```java
public java.lang.String getSeparatorInput();
```

- *Type:* java.lang.String

---

##### `suffixInput`<sup>Optional</sup> <a name="suffixInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.suffixInput"></a>

```java
public java.lang.String getSuffixInput();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `separator`<sup>Required</sup> <a name="separator" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.separator"></a>

```java
public java.lang.String getSeparator();
```

- *Type:* java.lang.String

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.suffix"></a>

```java
public java.lang.String getSuffix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.internalValue"></a>

```java
public SqlQueryParameterEnumMultiple getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple">SqlQueryParameterEnumMultiple</a>

---


### SqlQueryParameterEnumOutputReference <a name="SqlQueryParameterEnumOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_query.SqlQueryParameterEnumOutputReference;

new SqlQueryParameterEnumOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.putMultiple">putMultiple</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.resetMultiple">resetMultiple</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.resetValue">resetValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMultiple` <a name="putMultiple" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.putMultiple"></a>

```java
public void putMultiple(SqlQueryParameterEnumMultiple value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.putMultiple.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple">SqlQueryParameterEnumMultiple</a>

---

##### `resetMultiple` <a name="resetMultiple" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.resetMultiple"></a>

```java
public void resetMultiple()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.resetValue"></a>

```java
public void resetValue()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.multiple">multiple</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference">SqlQueryParameterEnumMultipleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.multipleInput">multipleInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple">SqlQueryParameterEnumMultiple</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.optionsInput">optionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.options">options</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum">SqlQueryParameterEnum</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `multiple`<sup>Required</sup> <a name="multiple" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.multiple"></a>

```java
public SqlQueryParameterEnumMultipleOutputReference getMultiple();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference">SqlQueryParameterEnumMultipleOutputReference</a>

---

##### `multipleInput`<sup>Optional</sup> <a name="multipleInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.multipleInput"></a>

```java
public SqlQueryParameterEnumMultiple getMultipleInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple">SqlQueryParameterEnumMultiple</a>

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.optionsInput"></a>

```java
public java.util.List<java.lang.String> getOptionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.options"></a>

```java
public java.util.List<java.lang.String> getOptions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.internalValue"></a>

```java
public SqlQueryParameterEnum getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum">SqlQueryParameterEnum</a>

---


### SqlQueryParameterList <a name="SqlQueryParameterList" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_query.SqlQueryParameterList;

new SqlQueryParameterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.get"></a>

```java
public SqlQueryParameterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter">SqlQueryParameter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SqlQueryParameter> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter">SqlQueryParameter</a>>

---


### SqlQueryParameterNumberOutputReference <a name="SqlQueryParameterNumberOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_query.SqlQueryParameterNumberOutputReference;

new SqlQueryParameterNumberOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumber">SqlQueryParameterNumber</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.property.internalValue"></a>

```java
public SqlQueryParameterNumber getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumber">SqlQueryParameterNumber</a>

---


### SqlQueryParameterOutputReference <a name="SqlQueryParameterOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_query.SqlQueryParameterOutputReference;

new SqlQueryParameterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDate">putDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDateRange">putDateRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDatetime">putDatetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDatetimeRange">putDatetimeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDatetimesec">putDatetimesec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDatetimesecRange">putDatetimesecRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putEnum">putEnum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putNumber">putNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putQuery">putQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putText">putText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetDate">resetDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetDateRange">resetDateRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetDatetime">resetDatetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetDatetimeRange">resetDatetimeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetDatetimesec">resetDatetimesec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetDatetimesecRange">resetDatetimesecRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetEnum">resetEnum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetNumber">resetNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetQuery">resetQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetText">resetText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDate` <a name="putDate" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDate"></a>

```java
public void putDate(SqlQueryParameterDate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDate">SqlQueryParameterDate</a>

---

##### `putDateRange` <a name="putDateRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDateRange"></a>

```java
public void putDateRange(SqlQueryParameterDateRange value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDateRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRange">SqlQueryParameterDateRange</a>

---

##### `putDatetime` <a name="putDatetime" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDatetime"></a>

```java
public void putDatetime(SqlQueryParameterDatetime value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDatetime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetime">SqlQueryParameterDatetime</a>

---

##### `putDatetimeRange` <a name="putDatetimeRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDatetimeRange"></a>

```java
public void putDatetimeRange(SqlQueryParameterDatetimeRange value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDatetimeRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRange">SqlQueryParameterDatetimeRange</a>

---

##### `putDatetimesec` <a name="putDatetimesec" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDatetimesec"></a>

```java
public void putDatetimesec(SqlQueryParameterDatetimesec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDatetimesec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesec">SqlQueryParameterDatetimesec</a>

---

##### `putDatetimesecRange` <a name="putDatetimesecRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDatetimesecRange"></a>

```java
public void putDatetimesecRange(SqlQueryParameterDatetimesecRange value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDatetimesecRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRange">SqlQueryParameterDatetimesecRange</a>

---

##### `putEnum` <a name="putEnum" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putEnum"></a>

```java
public void putEnum(SqlQueryParameterEnum value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putEnum.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum">SqlQueryParameterEnum</a>

---

##### `putNumber` <a name="putNumber" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putNumber"></a>

```java
public void putNumber(SqlQueryParameterNumber value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putNumber.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumber">SqlQueryParameterNumber</a>

---

##### `putQuery` <a name="putQuery" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putQuery"></a>

```java
public void putQuery(SqlQueryParameterQuery value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putQuery.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery">SqlQueryParameterQuery</a>

---

##### `putText` <a name="putText" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putText"></a>

```java
public void putText(SqlQueryParameterText value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putText.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterText">SqlQueryParameterText</a>

---

##### `resetDate` <a name="resetDate" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetDate"></a>

```java
public void resetDate()
```

##### `resetDateRange` <a name="resetDateRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetDateRange"></a>

```java
public void resetDateRange()
```

##### `resetDatetime` <a name="resetDatetime" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetDatetime"></a>

```java
public void resetDatetime()
```

##### `resetDatetimeRange` <a name="resetDatetimeRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetDatetimeRange"></a>

```java
public void resetDatetimeRange()
```

##### `resetDatetimesec` <a name="resetDatetimesec" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetDatetimesec"></a>

```java
public void resetDatetimesec()
```

##### `resetDatetimesecRange` <a name="resetDatetimesecRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetDatetimesecRange"></a>

```java
public void resetDatetimesecRange()
```

##### `resetEnum` <a name="resetEnum" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetEnum"></a>

```java
public void resetEnum()
```

##### `resetNumber` <a name="resetNumber" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetNumber"></a>

```java
public void resetNumber()
```

##### `resetQuery` <a name="resetQuery" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetQuery"></a>

```java
public void resetQuery()
```

##### `resetText` <a name="resetText" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetText"></a>

```java
public void resetText()
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetTitle"></a>

```java
public void resetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.date">date</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference">SqlQueryParameterDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.dateRange">dateRange</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference">SqlQueryParameterDateRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetime">datetime</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference">SqlQueryParameterDatetimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimeRange">datetimeRange</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference">SqlQueryParameterDatetimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimesec">datetimesec</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference">SqlQueryParameterDatetimesecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimesecRange">datetimesecRange</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference">SqlQueryParameterDatetimesecRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.enum">enum</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference">SqlQueryParameterEnumOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.number">number</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference">SqlQueryParameterNumberOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.query">query</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference">SqlQueryParameterQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.text">text</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference">SqlQueryParameterTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.dateInput">dateInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDate">SqlQueryParameterDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.dateRangeInput">dateRangeInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRange">SqlQueryParameterDateRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimeInput">datetimeInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetime">SqlQueryParameterDatetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimeRangeInput">datetimeRangeInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRange">SqlQueryParameterDatetimeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimesecInput">datetimesecInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesec">SqlQueryParameterDatetimesec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimesecRangeInput">datetimesecRangeInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRange">SqlQueryParameterDatetimesecRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.enumInput">enumInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum">SqlQueryParameterEnum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.numberInput">numberInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumber">SqlQueryParameterNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.queryInput">queryInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery">SqlQueryParameterQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.textInput">textInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterText">SqlQueryParameterText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter">SqlQueryParameter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `date`<sup>Required</sup> <a name="date" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.date"></a>

```java
public SqlQueryParameterDateOutputReference getDate();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference">SqlQueryParameterDateOutputReference</a>

---

##### `dateRange`<sup>Required</sup> <a name="dateRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.dateRange"></a>

```java
public SqlQueryParameterDateRangeOutputReference getDateRange();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference">SqlQueryParameterDateRangeOutputReference</a>

---

##### `datetime`<sup>Required</sup> <a name="datetime" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetime"></a>

```java
public SqlQueryParameterDatetimeOutputReference getDatetime();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference">SqlQueryParameterDatetimeOutputReference</a>

---

##### `datetimeRange`<sup>Required</sup> <a name="datetimeRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimeRange"></a>

```java
public SqlQueryParameterDatetimeRangeOutputReference getDatetimeRange();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference">SqlQueryParameterDatetimeRangeOutputReference</a>

---

##### `datetimesec`<sup>Required</sup> <a name="datetimesec" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimesec"></a>

```java
public SqlQueryParameterDatetimesecOutputReference getDatetimesec();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference">SqlQueryParameterDatetimesecOutputReference</a>

---

##### `datetimesecRange`<sup>Required</sup> <a name="datetimesecRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimesecRange"></a>

```java
public SqlQueryParameterDatetimesecRangeOutputReference getDatetimesecRange();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference">SqlQueryParameterDatetimesecRangeOutputReference</a>

---

##### `enum`<sup>Required</sup> <a name="enum" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.enum"></a>

```java
public SqlQueryParameterEnumOutputReference getEnum();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference">SqlQueryParameterEnumOutputReference</a>

---

##### `number`<sup>Required</sup> <a name="number" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.number"></a>

```java
public SqlQueryParameterNumberOutputReference getNumber();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference">SqlQueryParameterNumberOutputReference</a>

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.query"></a>

```java
public SqlQueryParameterQueryOutputReference getQuery();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference">SqlQueryParameterQueryOutputReference</a>

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.text"></a>

```java
public SqlQueryParameterTextOutputReference getText();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference">SqlQueryParameterTextOutputReference</a>

---

##### `dateInput`<sup>Optional</sup> <a name="dateInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.dateInput"></a>

```java
public SqlQueryParameterDate getDateInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDate">SqlQueryParameterDate</a>

---

##### `dateRangeInput`<sup>Optional</sup> <a name="dateRangeInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.dateRangeInput"></a>

```java
public SqlQueryParameterDateRange getDateRangeInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRange">SqlQueryParameterDateRange</a>

---

##### `datetimeInput`<sup>Optional</sup> <a name="datetimeInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimeInput"></a>

```java
public SqlQueryParameterDatetime getDatetimeInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetime">SqlQueryParameterDatetime</a>

---

##### `datetimeRangeInput`<sup>Optional</sup> <a name="datetimeRangeInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimeRangeInput"></a>

```java
public SqlQueryParameterDatetimeRange getDatetimeRangeInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRange">SqlQueryParameterDatetimeRange</a>

---

##### `datetimesecInput`<sup>Optional</sup> <a name="datetimesecInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimesecInput"></a>

```java
public SqlQueryParameterDatetimesec getDatetimesecInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesec">SqlQueryParameterDatetimesec</a>

---

##### `datetimesecRangeInput`<sup>Optional</sup> <a name="datetimesecRangeInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimesecRangeInput"></a>

```java
public SqlQueryParameterDatetimesecRange getDatetimesecRangeInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRange">SqlQueryParameterDatetimesecRange</a>

---

##### `enumInput`<sup>Optional</sup> <a name="enumInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.enumInput"></a>

```java
public SqlQueryParameterEnum getEnumInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum">SqlQueryParameterEnum</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `numberInput`<sup>Optional</sup> <a name="numberInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.numberInput"></a>

```java
public SqlQueryParameterNumber getNumberInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumber">SqlQueryParameterNumber</a>

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.queryInput"></a>

```java
public SqlQueryParameterQuery getQueryInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery">SqlQueryParameterQuery</a>

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.textInput"></a>

```java
public SqlQueryParameterText getTextInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterText">SqlQueryParameterText</a>

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.internalValue"></a>

```java
public IResolvable|SqlQueryParameter getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter">SqlQueryParameter</a>

---


### SqlQueryParameterQueryMultipleOutputReference <a name="SqlQueryParameterQueryMultipleOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_query.SqlQueryParameterQueryMultipleOutputReference;

new SqlQueryParameterQueryMultipleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.resetSuffix">resetSuffix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```

##### `resetSuffix` <a name="resetSuffix" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.resetSuffix"></a>

```java
public void resetSuffix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.separatorInput">separatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.suffixInput">suffixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.separator">separator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.suffix">suffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple">SqlQueryParameterQueryMultiple</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `separatorInput`<sup>Optional</sup> <a name="separatorInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.separatorInput"></a>

```java
public java.lang.String getSeparatorInput();
```

- *Type:* java.lang.String

---

##### `suffixInput`<sup>Optional</sup> <a name="suffixInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.suffixInput"></a>

```java
public java.lang.String getSuffixInput();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `separator`<sup>Required</sup> <a name="separator" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.separator"></a>

```java
public java.lang.String getSeparator();
```

- *Type:* java.lang.String

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.suffix"></a>

```java
public java.lang.String getSuffix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.internalValue"></a>

```java
public SqlQueryParameterQueryMultiple getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple">SqlQueryParameterQueryMultiple</a>

---


### SqlQueryParameterQueryOutputReference <a name="SqlQueryParameterQueryOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_query.SqlQueryParameterQueryOutputReference;

new SqlQueryParameterQueryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.putMultiple">putMultiple</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.resetMultiple">resetMultiple</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.resetValue">resetValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMultiple` <a name="putMultiple" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.putMultiple"></a>

```java
public void putMultiple(SqlQueryParameterQueryMultiple value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.putMultiple.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple">SqlQueryParameterQueryMultiple</a>

---

##### `resetMultiple` <a name="resetMultiple" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.resetMultiple"></a>

```java
public void resetMultiple()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.resetValue"></a>

```java
public void resetValue()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.multiple">multiple</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference">SqlQueryParameterQueryMultipleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.multipleInput">multipleInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple">SqlQueryParameterQueryMultiple</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.queryIdInput">queryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.queryId">queryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery">SqlQueryParameterQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `multiple`<sup>Required</sup> <a name="multiple" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.multiple"></a>

```java
public SqlQueryParameterQueryMultipleOutputReference getMultiple();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference">SqlQueryParameterQueryMultipleOutputReference</a>

---

##### `multipleInput`<sup>Optional</sup> <a name="multipleInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.multipleInput"></a>

```java
public SqlQueryParameterQueryMultiple getMultipleInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple">SqlQueryParameterQueryMultiple</a>

---

##### `queryIdInput`<sup>Optional</sup> <a name="queryIdInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.queryIdInput"></a>

```java
public java.lang.String getQueryIdInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `queryId`<sup>Required</sup> <a name="queryId" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.queryId"></a>

```java
public java.lang.String getQueryId();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.internalValue"></a>

```java
public SqlQueryParameterQuery getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery">SqlQueryParameterQuery</a>

---


### SqlQueryParameterTextOutputReference <a name="SqlQueryParameterTextOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_query.SqlQueryParameterTextOutputReference;

new SqlQueryParameterTextOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterText">SqlQueryParameterText</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.property.internalValue"></a>

```java
public SqlQueryParameterText getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterText">SqlQueryParameterText</a>

---


### SqlQueryScheduleContinuousOutputReference <a name="SqlQueryScheduleContinuousOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_query.SqlQueryScheduleContinuousOutputReference;

new SqlQueryScheduleContinuousOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.resetUntilDate">resetUntilDate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUntilDate` <a name="resetUntilDate" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.resetUntilDate"></a>

```java
public void resetUntilDate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.intervalSecondsInput">intervalSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.untilDateInput">untilDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.intervalSeconds">intervalSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.untilDate">untilDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuous">SqlQueryScheduleContinuous</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `intervalSecondsInput`<sup>Optional</sup> <a name="intervalSecondsInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.intervalSecondsInput"></a>

```java
public java.lang.Number getIntervalSecondsInput();
```

- *Type:* java.lang.Number

---

##### `untilDateInput`<sup>Optional</sup> <a name="untilDateInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.untilDateInput"></a>

```java
public java.lang.String getUntilDateInput();
```

- *Type:* java.lang.String

---

##### `intervalSeconds`<sup>Required</sup> <a name="intervalSeconds" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.intervalSeconds"></a>

```java
public java.lang.Number getIntervalSeconds();
```

- *Type:* java.lang.Number

---

##### `untilDate`<sup>Required</sup> <a name="untilDate" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.untilDate"></a>

```java
public java.lang.String getUntilDate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.internalValue"></a>

```java
public SqlQueryScheduleContinuous getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuous">SqlQueryScheduleContinuous</a>

---


### SqlQueryScheduleDailyOutputReference <a name="SqlQueryScheduleDailyOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_query.SqlQueryScheduleDailyOutputReference;

new SqlQueryScheduleDailyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.resetUntilDate">resetUntilDate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUntilDate` <a name="resetUntilDate" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.resetUntilDate"></a>

```java
public void resetUntilDate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.intervalDaysInput">intervalDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.timeOfDayInput">timeOfDayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.untilDateInput">untilDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.intervalDays">intervalDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.timeOfDay">timeOfDay</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.untilDate">untilDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily">SqlQueryScheduleDaily</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `intervalDaysInput`<sup>Optional</sup> <a name="intervalDaysInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.intervalDaysInput"></a>

```java
public java.lang.Number getIntervalDaysInput();
```

- *Type:* java.lang.Number

---

##### `timeOfDayInput`<sup>Optional</sup> <a name="timeOfDayInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.timeOfDayInput"></a>

```java
public java.lang.String getTimeOfDayInput();
```

- *Type:* java.lang.String

---

##### `untilDateInput`<sup>Optional</sup> <a name="untilDateInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.untilDateInput"></a>

```java
public java.lang.String getUntilDateInput();
```

- *Type:* java.lang.String

---

##### `intervalDays`<sup>Required</sup> <a name="intervalDays" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.intervalDays"></a>

```java
public java.lang.Number getIntervalDays();
```

- *Type:* java.lang.Number

---

##### `timeOfDay`<sup>Required</sup> <a name="timeOfDay" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.timeOfDay"></a>

```java
public java.lang.String getTimeOfDay();
```

- *Type:* java.lang.String

---

##### `untilDate`<sup>Required</sup> <a name="untilDate" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.untilDate"></a>

```java
public java.lang.String getUntilDate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.internalValue"></a>

```java
public SqlQueryScheduleDaily getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily">SqlQueryScheduleDaily</a>

---


### SqlQueryScheduleOutputReference <a name="SqlQueryScheduleOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_query.SqlQueryScheduleOutputReference;

new SqlQueryScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.putContinuous">putContinuous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.putDaily">putDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.putWeekly">putWeekly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.resetContinuous">resetContinuous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.resetDaily">resetDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.resetWeekly">resetWeekly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContinuous` <a name="putContinuous" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.putContinuous"></a>

```java
public void putContinuous(SqlQueryScheduleContinuous value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.putContinuous.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuous">SqlQueryScheduleContinuous</a>

---

##### `putDaily` <a name="putDaily" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.putDaily"></a>

```java
public void putDaily(SqlQueryScheduleDaily value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.putDaily.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily">SqlQueryScheduleDaily</a>

---

##### `putWeekly` <a name="putWeekly" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.putWeekly"></a>

```java
public void putWeekly(SqlQueryScheduleWeekly value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.putWeekly.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly">SqlQueryScheduleWeekly</a>

---

##### `resetContinuous` <a name="resetContinuous" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.resetContinuous"></a>

```java
public void resetContinuous()
```

##### `resetDaily` <a name="resetDaily" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.resetDaily"></a>

```java
public void resetDaily()
```

##### `resetWeekly` <a name="resetWeekly" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.resetWeekly"></a>

```java
public void resetWeekly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.continuous">continuous</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference">SqlQueryScheduleContinuousOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.daily">daily</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference">SqlQueryScheduleDailyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.weekly">weekly</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference">SqlQueryScheduleWeeklyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.continuousInput">continuousInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuous">SqlQueryScheduleContinuous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.dailyInput">dailyInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily">SqlQueryScheduleDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.weeklyInput">weeklyInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly">SqlQueryScheduleWeekly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule">SqlQuerySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `continuous`<sup>Required</sup> <a name="continuous" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.continuous"></a>

```java
public SqlQueryScheduleContinuousOutputReference getContinuous();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference">SqlQueryScheduleContinuousOutputReference</a>

---

##### `daily`<sup>Required</sup> <a name="daily" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.daily"></a>

```java
public SqlQueryScheduleDailyOutputReference getDaily();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference">SqlQueryScheduleDailyOutputReference</a>

---

##### `weekly`<sup>Required</sup> <a name="weekly" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.weekly"></a>

```java
public SqlQueryScheduleWeeklyOutputReference getWeekly();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference">SqlQueryScheduleWeeklyOutputReference</a>

---

##### `continuousInput`<sup>Optional</sup> <a name="continuousInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.continuousInput"></a>

```java
public SqlQueryScheduleContinuous getContinuousInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuous">SqlQueryScheduleContinuous</a>

---

##### `dailyInput`<sup>Optional</sup> <a name="dailyInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.dailyInput"></a>

```java
public SqlQueryScheduleDaily getDailyInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily">SqlQueryScheduleDaily</a>

---

##### `weeklyInput`<sup>Optional</sup> <a name="weeklyInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.weeklyInput"></a>

```java
public SqlQueryScheduleWeekly getWeeklyInput();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly">SqlQueryScheduleWeekly</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.internalValue"></a>

```java
public SqlQuerySchedule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule">SqlQuerySchedule</a>

---


### SqlQueryScheduleWeeklyOutputReference <a name="SqlQueryScheduleWeeklyOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.sql_query.SqlQueryScheduleWeeklyOutputReference;

new SqlQueryScheduleWeeklyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.resetUntilDate">resetUntilDate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUntilDate` <a name="resetUntilDate" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.resetUntilDate"></a>

```java
public void resetUntilDate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.dayOfWeekInput">dayOfWeekInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.intervalWeeksInput">intervalWeeksInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.timeOfDayInput">timeOfDayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.untilDateInput">untilDateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.dayOfWeek">dayOfWeek</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.intervalWeeks">intervalWeeks</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.timeOfDay">timeOfDay</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.untilDate">untilDate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly">SqlQueryScheduleWeekly</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dayOfWeekInput`<sup>Optional</sup> <a name="dayOfWeekInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.dayOfWeekInput"></a>

```java
public java.lang.String getDayOfWeekInput();
```

- *Type:* java.lang.String

---

##### `intervalWeeksInput`<sup>Optional</sup> <a name="intervalWeeksInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.intervalWeeksInput"></a>

```java
public java.lang.Number getIntervalWeeksInput();
```

- *Type:* java.lang.Number

---

##### `timeOfDayInput`<sup>Optional</sup> <a name="timeOfDayInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.timeOfDayInput"></a>

```java
public java.lang.String getTimeOfDayInput();
```

- *Type:* java.lang.String

---

##### `untilDateInput`<sup>Optional</sup> <a name="untilDateInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.untilDateInput"></a>

```java
public java.lang.String getUntilDateInput();
```

- *Type:* java.lang.String

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.dayOfWeek"></a>

```java
public java.lang.String getDayOfWeek();
```

- *Type:* java.lang.String

---

##### `intervalWeeks`<sup>Required</sup> <a name="intervalWeeks" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.intervalWeeks"></a>

```java
public java.lang.Number getIntervalWeeks();
```

- *Type:* java.lang.Number

---

##### `timeOfDay`<sup>Required</sup> <a name="timeOfDay" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.timeOfDay"></a>

```java
public java.lang.String getTimeOfDay();
```

- *Type:* java.lang.String

---

##### `untilDate`<sup>Required</sup> <a name="untilDate" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.untilDate"></a>

```java
public java.lang.String getUntilDate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.internalValue"></a>

```java
public SqlQueryScheduleWeekly getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly">SqlQueryScheduleWeekly</a>

---



